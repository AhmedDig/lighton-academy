// ===== PLACEMENT TEST – FINAL VERSION =====
const WORKER_URL = 'https://lead-proxy.mena-digital.workers.dev';
const QUESTIONS_ENDPOINT = WORKER_URL + '/questions';
const LEAD_ENDPOINT = WORKER_URL + '/lead';

// ===== TARGET DISTRIBUTION PER LEVEL =====
const LEVEL_TARGETS = {
  A1: 15,
  A2: 15,
  B1: 10,
  B2: 10,
  C1: 5,
  C2: 5
};

// ===== STATE =====
let allQuestions = {};       // { "Grammar": [...], "Vocabulary": [...], ... }
let sections = [];
let currentSection = 0;
let answers = {};
let leadData = {};
let timerInterval = null;
const SESSION_KEY = 'lighton_test_questions';

// ===== TOAST =====
function showToast(message, type = 'info', duration = 4000) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.style.cssText = `
    background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transform: translateX(100px);
    transition: all 0.3s ease;
    min-width: 250px;
    margin-bottom: 8px;
  `;
  toast.textContent = message;
  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(0)';
  });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ===== FETCH QUESTIONS =====
async function fetchQuestions() {
  const cached = sessionStorage.getItem(SESSION_KEY);
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      // Ensure it's the correct object structure
      if (typeof parsed === 'object' && !Array.isArray(parsed)) {
        allQuestions = parsed;
        sections = Object.keys(allQuestions);
        console.log('📦 Loaded from sessionStorage:', sections);
        return;
      } else {
        console.warn('⚠️ Invalid cache structure. Clearing...');
        sessionStorage.removeItem(SESSION_KEY);
      }
    } catch (_) { /* ignore */ }
  }

  console.log('📥 Fetching from Worker...');
  try {
    const response = await fetch(QUESTIONS_ENDPOINT);
    const result = await response.json();
    if (!result.success) throw new Error(result.error || 'Fetch failed');
    allQuestions = result.data;
    sections = Object.keys(allQuestions);
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(allQuestions));
    console.log('✅ Fetched and cached:', sections);
  } catch (error) {
    console.error('❌ Fetch error:', error);
    showToast('Unable to load test. Please refresh.', 'error');
  }
}

function selectQuestions() {
  // Group raw questions by section and level
  const grouped = {};
  sections.forEach(s => grouped[s] = {});
  sections.forEach(s => {
    allQuestions[s].forEach(q => {
      if (!grouped[s][q.level]) grouped[s][q.level] = [];
      grouped[s][q.level].push(q);
    });
  });

  const selected = {};
  sections.forEach(s => selected[s] = []);

  Object.keys(LEVEL_TARGETS).forEach(level => {
    let totalAvail = 0;
    sections.forEach(s => {
      totalAvail += (grouped[s][level] || []).length;
    });
    if (totalAvail === 0) return;

    let remaining = LEVEL_TARGETS[level];
    const perSection = {};
    sections.forEach(s => {
      const avail = (grouped[s][level] || []).length;
      let count = Math.round((avail / totalAvail) * LEVEL_TARGETS[level]);
      count = Math.min(count, avail, remaining);
      perSection[s] = count;
      remaining -= count;
    });

    // Distribute leftovers
    if (remaining > 0) {
      for (const s of sections) {
        const avail = (grouped[s][level] || []).length;
        if (avail > perSection[s]) {
          const add = Math.min(remaining, avail - perSection[s]);
          perSection[s] += add;
          remaining -= add;
          if (remaining === 0) break;
        }
      }
    }

    // Pick random questions and assign a unique ID to each
    sections.forEach(s => {
      const count = perSection[s] || 0;
      const pool = grouped[s][level] || [];
      if (pool.length === 0 || count === 0) return;
      const shuffled = [...pool];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      const picked = shuffled.slice(0, count);

      // ✅ Assign a unique ID to each question
      picked.forEach((q, index) => {
        const uniqueId = `${s}-${level}-${index}`; // e.g., "Grammar-A1-0"
        const options = [q.option_a, q.option_b, q.option_c, q.option_d];
        const correctIndex = options.indexOf(q.correct_answer);
        selected[s].push({
          id: uniqueId, // ✅ Unique ID for radio button name
          level: q.level,
          question_text: q.question_text,
          options: options,
          correct_index: correctIndex !== -1 ? correctIndex : 0
        });
      });
    });
  });

  // Shuffle each section's questions (optional, but maintains randomness)
  sections.forEach(s => {
    for (let i = selected[s].length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [selected[s][i], selected[s][j]] = [selected[s][j], selected[s][i]];
    }
  });

  allQuestions = selected;

  let total = 0;
  sections.forEach(s => total += allQuestions[s].length);
  console.log(`✅ Selected ${total} questions (target 60)`);
}

// ===== LEAD FORM =====
document.getElementById('leadForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  leadData = {
    name: document.getElementById('leadName').value.trim(),
    email: document.getElementById('leadEmail').value.trim(),
    phone: document.getElementById('leadPhone').value.trim()
  };
  if (!leadData.name || !leadData.email || !leadData.phone) {
    showToast('Please fill in all fields.', 'error');
    return;
  }

  showToast('Loading questions...', 'info', 2000);
  await fetchQuestions();
  if (Object.keys(allQuestions).length === 0) return;

  selectQuestions();
  for (const s of sections) {
    if (allQuestions[s].length === 0) {
      showToast(`No questions for ${s}.`, 'error');
      return;
    }
  }

  document.getElementById('leadFormContainer').style.display = 'none';
  document.getElementById('testContainer').style.display = 'block';
  loadSection();
});

// ===== LOAD SECTION =====
function loadSection() {
  const sectionName = sections[currentSection];
  const sectionQuestions = allQuestions[sectionName] || [];

  if (sectionQuestions.length === 0) {
    nextSection();
    return;
  }

  document.getElementById('sectionHeader').innerHTML =
    `<h2>${sectionName}</h2><p>${sectionQuestions.length} questions</p>`;

  const container = document.getElementById('questionsContainer');
  container.innerHTML = '';
  sectionQuestions.forEach((q, idx) => {
    const div = document.createElement('div');
    div.className = 'question-card';
    div.style.cssText = 'margin-bottom: 1.5rem; padding: 1.5rem; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);';
    div.innerHTML = `
      <p><strong>${idx + 1}. ${q.question_text}</strong></p>
      <div class="options" style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
        ${q.options.map((opt, i) => `
          <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
            <input type="radio" name="q_${q.id}" value="${i}" ${answers[q.id] === i ? 'checked' : ''}>
             ${opt}
          </label>
        `).join('')}
      </div>
    `;
    container.appendChild(div);
  });

  const nextBtn = document.getElementById('nextSectionBtn');
  if (currentSection === sections.length - 1) {
    nextBtn.textContent = 'Submit';
  } else {
    nextBtn.textContent = 'Next Section';
  }
  nextBtn.style.display = 'block';
  
  startTimer(15 * 60);
  // Scroll to top of the test container
  // ✅ ADD THIS LINE HERE:
  window.scrollTo({ top: 0, behavior: 'instant' });}

// ===== TIMER =====
function startTimer(seconds) {
  if (timerInterval) clearInterval(timerInterval);
  const timerDisplay = document.getElementById('timerDisplay');
  timerInterval = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      submitSection();
    }
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

// ===== SUBMIT SECTION =====
function submitSection() {
  const sectionName = sections[currentSection];
  const sectionQuestions = allQuestions[sectionName] || [];
  sectionQuestions.forEach(q => {
    const selected = document.querySelector(`input[name="q_${q.id}"]:checked`);
    if (selected) {
      answers[q.id] = parseInt(selected.value);
    }
  });
  nextSection();
}

function nextSection() {
  currentSection++;
  if (currentSection < sections.length) {
    loadSection();
  } else {
    calculateResult();
  }
}

// ===== CALCULATE RESULT =====
async function calculateResult() {
  let totalScore = 0;
  const sectionScores = {};

  sections.forEach(s => {
    const qs = allQuestions[s] || [];
    let correct = 0;
    qs.forEach(q => {
      // Compare user's selected index with the correct index
      if (answers[q.id] === q.correct_index) correct++;
    });
    sectionScores[s] = correct;
    totalScore += correct;
  });

  const totalQuestions = 60;
  let level = 'A1';
  if (totalScore >= 56) level = 'C2';
  else if (totalScore >= 51) level = 'C1';
  else if (totalScore >= 41) level = 'B2';
  else if (totalScore >= 31) level = 'B1';
  else if (totalScore >= 16) level = 'A2';

  const sectionScoreStr = sections.map(s => sectionScores[s] || 0).join(',');

  document.getElementById('resultContainer').innerHTML = `<p style="text-align:center;">Sending your results...</p>`;
  document.getElementById('resultContainer').style.display = 'block';

  try {
    const response = await fetch(LEAD_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        ...leadData, 
        score: totalScore, 
        total: totalQuestions, 
        level, 
        sectionScores: sectionScoreStr 
      })
    });
    if (!response.ok) throw new Error('Server error');
    const result = await response.json();
    if (result.success) {
      showToast('Results sent successfully!', 'success', 2000);
    } else {
      showToast('Error submitting results. Please try again.', 'error', 4000);
      return;
    }
  } catch (error) {
    console.error('❌ Submission error:', error);
    showToast('Error submitting results. Please try again.', 'error', 4000);
    return;
  }

  // Clear session data
  sessionStorage.removeItem(SESSION_KEY);
  setTimeout(() => {
    window.location.href = `placement-result.html?score=${totalScore}&total=${totalQuestions}&level=${level}&sectionScores=${sectionScoreStr}`;
  }, 1500);
}

// ===== NEXT SECTION BUTTON =====
document.getElementById('nextSectionBtn').addEventListener('click', function () {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  submitSection();
});