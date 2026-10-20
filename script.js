import * as THREE from 'three'
import './style.css'

const questionBank = [
  {
    topic: 'waswere', label: 'was / were', marker: 'VERB TO BE',
    sentence: 'They <span class="blank">___</span> at home yesterday.',
    answers: ['was', 'were'], correct: 1,
    ruleTitle: 'Was or were?', ruleText: 'Use <b>was</b> with I, he, she or it. Use <b>were</b> with you, we or they.', ruleExample: 'They <b>were</b> at home yesterday.',
    explanation: '“They” is plural, so the correct form is <strong>were</strong>.'
  },
  {
    topic: 'regular', label: 'regular verbs', marker: '+ ED RULES',
    sentence: 'She <span class="blank">___</span> a movie last night.',
    answers: ['watch', 'watched'], correct: 1,
    ruleTitle: 'Regular verbs', ruleText: 'For most regular verbs, add <b>-ed</b> to make the Past Simple.', ruleExample: 'watch → <b>watched</b> · work → worked',
    explanation: '“Watch” is regular: watch + ed = <strong>watched</strong>.'
  },
  {
    topic: 'irregular', label: 'irregular verbs', marker: 'NO FIXED RULES',
    sentence: 'Yesterday, I <span class="blank">___</span> to the park.',
    answers: ['go', 'went'], correct: 1,
    ruleTitle: 'Irregular verbs', ruleText: 'Irregular verbs change form. There is no single rule, so we memorize them.', ruleExample: 'go → <b>went</b> · see → saw',
    explanation: '“Go” is irregular: its past form is <strong>went</strong>.'
  },
  {
    topic: 'negatives', label: 'negatives', marker: 'DID + BASE VERB',
    sentence: 'I didn’t <span class="blank">___</span> him yesterday.',
    answers: ['call', 'called'], correct: 0,
    ruleTitle: 'Didn’t + base verb', ruleText: 'After <b>didn’t</b>, keep the verb in its base form. The past is already in “did”.', ruleExample: 'I didn’t <b>call</b> him yesterday.',
    explanation: 'After “didn’t”, use the base verb: <strong>call</strong>, not called.'
  },
  {
    topic: 'time', label: 'time markers', marker: 'QUESTION FORM',
    sentence: 'Did you <span class="blank">___</span> the book two hours ago?',
    answers: ['read', 'readed'], correct: 0,
    ruleTitle: 'Did + base verb', ruleText: 'Questions use <b>Did + subject + base verb</b>. Time markers help signal the past.', ruleExample: 'Did you <b>read</b> it two hours ago?',
    explanation: 'After “Did you”, use the base verb <strong>read</strong>. “Readed” is not a word.'
  },
  {
    topic: 'irregular', label: 'irregular verbs', marker: 'PAST SIMPLE',
    sentence: 'We <span class="blank">___</span> dinner after class.',
    answers: ['have', 'had'], correct: 1,
    ruleTitle: 'Remember the change', ruleText: 'Some common verbs have a special past form that must be memorized.', ruleExample: 'have → <b>had</b> · buy → bought',
    explanation: '“Have” changes to <strong>had</strong> in the Past Simple.'
  },
  {
    topic: 'regular', label: 'regular verbs', marker: '+ ED RULES',
    sentence: 'They <span class="blank">___</span> football yesterday.',
    answers: ['play', 'played'], correct: 1,
    ruleTitle: 'Add -ed', ruleText: 'A regular verb usually takes <b>-ed</b> after a past time marker.', ruleExample: 'They <b>played</b> football yesterday.',
    explanation: '“Play” is regular, so its past form is <strong>played</strong>.'
  },
  {
    topic: 'regular', label: 'regular verbs', marker: 'PAST SIMPLE',
    sentence: 'We <span class="blank">___</span> our project last week.',
    answers: ['finish', 'finished'], correct: 1,
    ruleTitle: 'Regular verbs', ruleText: 'The base verb <b>finish</b> becomes <b>finished</b> in the Past Simple.', ruleExample: 'We <b>finished</b> our project last week.',
    explanation: 'The regular past form is <strong>finished</strong>.'
  },
  {
    topic: 'waswere', label: 'was / were', marker: 'VERB TO BE',
    sentence: 'She <span class="blank">___</span> at work last Monday.',
    answers: ['was', 'were'], correct: 0,
    ruleTitle: 'Was or were?', ruleText: 'Use <b>was</b> with I, he, she and it.', ruleExample: 'She <b>was</b> at work last Monday.',
    explanation: '“She” is singular, so the correct form is <strong>was</strong>.'
  },
  {
    topic: 'waswere', label: 'was / were', marker: 'VERB TO BE',
    sentence: 'You <span class="blank">___</span> late last night.',
    answers: ['was', 'were'], correct: 1,
    ruleTitle: 'Was or were?', ruleText: 'Use <b>were</b> with you, even when “you” means one person.', ruleExample: 'You <b>were</b> late last night.',
    explanation: '“You” always takes <strong>were</strong> in the Past Simple.'
  },
  {
    topic: 'irregular', label: 'irregular verbs', marker: 'NO FIXED RULES',
    sentence: 'My brother <span class="blank">___</span> a new phone two days ago.',
    answers: ['buy', 'bought'], correct: 1,
    ruleTitle: 'Irregular verbs', ruleText: 'Some verbs change completely. <b>Buy</b> becomes <b>bought</b>.', ruleExample: 'He <b>bought</b> a new phone two days ago.',
    explanation: 'The irregular past form of “buy” is <strong>bought</strong>.'
  },
  {
    topic: 'irregular', label: 'irregular verbs', marker: 'NO FIXED RULES',
    sentence: 'I <span class="blank">___</span> my keys this morning.',
    answers: ['find', 'found'], correct: 1,
    ruleTitle: 'Irregular verbs', ruleText: 'The verb <b>find</b> changes to <b>found</b> in the past.', ruleExample: 'I <b>found</b> my keys this morning.',
    explanation: '“Find” is irregular: its past form is <strong>found</strong>.'
  },
  {
    topic: 'negatives', label: 'negatives', marker: 'DID + BASE VERB',
    sentence: 'He didn’t <span class="blank">___</span> breakfast.',
    answers: ['eat', 'ate'], correct: 0,
    ruleTitle: 'Didn’t + base verb', ruleText: 'After <b>didn’t</b>, use the base form, even with an irregular verb.', ruleExample: 'He didn’t <b>eat</b> breakfast.',
    explanation: '“Didn’t” already carries the past, so use <strong>eat</strong>.'
  },
  {
    topic: 'negatives', label: 'negatives', marker: 'DID + BASE VERB',
    sentence: 'They didn’t <span class="blank">___</span> to the party.',
    answers: ['go', 'went'], correct: 0,
    ruleTitle: 'Didn’t + base verb', ruleText: 'Never add the past form after <b>didn’t</b>.', ruleExample: 'They didn’t <b>go</b> to the party.',
    explanation: 'The correct form after “didn’t” is the base verb <strong>go</strong>.'
  },
  {
    topic: 'time', label: 'time markers', marker: 'QUESTION FORM',
    sentence: '<span class="blank">___</span> you watch the match?',
    answers: ['Did', 'Were'], correct: 0,
    ruleTitle: 'Did questions', ruleText: 'Use <b>Did</b> to begin a Past Simple question with an action verb.', ruleExample: '<b>Did</b> you watch the match?',
    explanation: '“Watch” is an action verb, so the question starts with <strong>Did</strong>.'
  },
  {
    topic: 'time', label: 'time markers', marker: 'PAST SIGNALS',
    sentence: 'We visited London <span class="blank">___</span> summer.',
    answers: ['last', 'next'], correct: 0,
    ruleTitle: 'Past time markers', ruleText: 'Words such as <b>last</b>, <b>yesterday</b> and <b>ago</b> point to the past.', ruleExample: 'We visited London <b>last</b> summer.',
    explanation: '“Last summer” is a Past Simple time marker.'
  },
  {
    topic: 'irregular', label: 'irregular verbs', marker: 'PAST SIMPLE',
    sentence: 'She <span class="blank">___</span> tired after the trip.',
    answers: ['felt', 'feel'], correct: 0,
    ruleTitle: 'Irregular verbs', ruleText: 'The verb <b>feel</b> changes to <b>felt</b> in the past.', ruleExample: 'She <b>felt</b> tired after the trip.',
    explanation: 'The irregular past form of “feel” is <strong>felt</strong>.'
  },
  {
    topic: 'regular', label: 'regular verbs', marker: '+ ED RULES',
    sentence: 'He <span class="blank">___</span> the email yesterday.',
    answers: ['answered', 'answer'], correct: 0,
    ruleTitle: 'Regular verbs', ruleText: 'The verb <b>answer</b> takes <b>-ed</b> in the Past Simple.', ruleExample: 'He <b>answered</b> the email yesterday.',
    explanation: 'The regular past form is <strong>answered</strong>.'
  }
].map((question, index) => ({ ...question, id: question.id ?? `question-${index + 1}` }))

const RUN_LENGTH = 6
const hintExamples = {
  waswere: 'He <b>was</b> tired last night.',
  regular: 'They <b>cleaned</b> the room yesterday.',
  irregular: 'We <b>bought</b> tickets last week.',
  negatives: 'She didn’t <b>play</b> tennis yesterday.',
  time: 'Did you call me <b>yesterday</b>?'
}
const state = { screen: 'title', index: 0, score: 0, correct: 0, streak: 0, bestStreak: 0, lives: 3, remaining: 45, answered: false, timerId: null, runQuestions: [], previousRunIds: [], previousAnswerPositions: {} }
const $ = selector => document.querySelector(selector)
const $$ = selector => [...document.querySelectorAll(selector)]

function shuffle(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[items[index], items[swapIndex]] = [items[swapIndex], items[index]]
  }
  return items
}

function updateLives() {
  $$('#lives i').forEach((heart, index) => heart.classList.toggle('is-empty', index >= state.lives))
}

function randomizeAnswers(question) {
  const options = shuffle(question.answers.map((answer, index) => ({ answer, isCorrect: index === question.correct })))
  return { ...question, answers: options.map(option => option.answer), correct: options.findIndex(option => option.isCorrect) }
}

function buildRun() {
  let selected
  do {
    selected = shuffle([...questionBank]).slice(0, RUN_LENGTH)
  } while (state.previousRunIds.length && selected.filter(question => !state.previousRunIds.includes(question.id)).length < 2)
  state.previousRunIds = selected.map(question => question.id)
  const run = selected.map(randomizeAnswers)
  run.forEach(question => {
    const previousPosition = state.previousAnswerPositions[question.id]
    if (previousPosition !== undefined && question.correct === previousPosition) {
      ;[question.answers[0], question.answers[1]] = [question.answers[1], question.answers[0]]
      question.correct = question.correct === 0 ? 1 : 0
    }
  })
  state.previousAnswerPositions = Object.fromEntries(run.map(question => [question.id, question.correct]))
  return run
}

function setScreen(screen) {
  state.screen = screen
  $$('[data-screen]').forEach(el => {
    const active = el.dataset.screen === screen
    el.classList.toggle('is-active', active)
    el.setAttribute('aria-hidden', String(!active))
  })
  if (screen === 'title') setTopic('overview')
}

function setTopic(topic) {
  $$('.topic-item').forEach(item => item.classList.toggle('is-current', item.dataset.topic === topic))
}

function startGame() {
  stopTimer()
  state.index = 0
  state.score = 0
  state.correct = 0
  state.streak = 0
  state.bestStreak = 0
  state.lives = 3
  state.runQuestions = buildRun()
  state.remaining = 45
  state.answered = false
  $('#score').textContent = '0'
  $('#streak').textContent = '0'
  $('#timer').textContent = '45'
  updateLives()
  setScreen('quiz')
  renderQuestion()
  startTimer()
  playTone('start')
}

function renderQuestion() {
  const question = state.runQuestions[state.index]
  state.answered = false
  $('#question-count').textContent = `Round ${state.index + 1} / ${state.runQuestions.length}`
  $('#progress-bar').style.width = `${((state.index + 1) / state.runQuestions.length) * 100}%`
  $('#question-topic').textContent = question.label
  $('#question-marker').textContent = question.marker
  $('#sentence').innerHTML = question.sentence
  $('#rule-title').textContent = question.ruleTitle
  $('#rule-text').innerHTML = question.ruleText
  $('#rule-example').innerHTML = question.ruleExample
  $('#rule-example-two').innerHTML = hintExamples[question.topic] ?? 'We <b>visited</b> the museum last Sunday.'
  $('#hint-content').hidden = true
  $('#hint-toggle').setAttribute('aria-expanded', 'false')
  $('#hint-toggle').textContent = 'Show hint'
  $('#feedback').textContent = ''
  $('#feedback').className = 'feedback'
  $('#next-btn').hidden = true
  setTopic(question.topic)
  const answers = $('#answers')
  answers.innerHTML = ''
  question.answers.forEach((answer, index) => {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'answer-btn'
    button.dataset.answer = String(index)
    button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${answer}</span>`
    button.addEventListener('click', () => chooseAnswer(index))
    answers.append(button)
  })
  $('#question-heading').focus?.()
}

function chooseAnswer(index) {
  if (state.answered) return
  state.answered = true
  stopTimer()
  const question = state.runQuestions[state.index]
  const buttons = $$('.answer-btn')
  buttons.forEach(button => {
    button.disabled = true
    const answer = Number(button.dataset.answer)
    if (answer === question.correct) button.classList.add('is-correct')
    if (answer === index && answer !== question.correct) button.classList.add('is-wrong')
  })
  const feedback = $('#feedback')
  const isCorrect = index === question.correct
  if (isCorrect) {
    state.correct += 1
    state.streak += 1
    state.bestStreak = Math.max(state.bestStreak, state.streak)
    state.score += 100 + Math.max(0, state.remaining * 2) + (state.streak * 40)
    $('#score').textContent = String(state.score)
    $('#streak').textContent = String(state.streak)
    feedback.innerHTML = `Correct! <strong>Combo ×${state.streak}</strong> · <strong>Why?</strong> ${question.explanation}`
    feedback.className = 'feedback is-correct'
    playTone('correct')
  } else {
    state.streak = 0
    state.lives = Math.max(0, state.lives - 1)
    $('#streak').textContent = '0'
    updateLives()
    feedback.innerHTML = `Not quite. <strong>${state.lives} lives left</strong> · <strong>Why?</strong> ${question.explanation}`
    feedback.className = 'feedback is-wrong'
    playTone('wrong')
  }
  $('#next-btn').hidden = false
  $('#next-btn').focus()
}

function nextQuestion() {
  if (!state.answered) return
  if (state.index >= state.runQuestions.length - 1) finishGame()
  else {
    state.index += 1
    renderQuestion()
    startTimer()
  }
}

function finishGame() {
  stopTimer()
  const accuracy = Math.round((state.correct / state.runQuestions.length) * 100)
  $('#correct-total').textContent = `${state.correct} / ${state.runQuestions.length}`
  $('#final-score').textContent = String(state.score)
  $('#best-streak').textContent = `${state.bestStreak}×`
  $('#accuracy').textContent = `${accuracy}%`
  $('#result-badge').textContent = accuracy === 100 ? 'PERFECT RUN' : state.bestStreak >= 3 ? 'HOT STREAK' : 'RUN COMPLETE'
  $('#results-message').textContent = accuracy === 100
    ? 'Perfect! You mastered the Past Simple challenge.'
    : accuracy >= 67
      ? 'Nice work. Review the highlighted rules and try once more for a perfect score.'
      : 'Good start. The rule cards are here to help you build confidence.'
  setScreen('results')
  playTone(accuracy >= 67 ? 'win' : 'wrong')
}

function startTimer() {
  state.timerId = window.setInterval(() => {
    state.remaining -= 1
    $('#timer').textContent = String(Math.max(0, state.remaining))
    if (state.remaining <= 10) $('#timer').style.color = 'var(--coral)'
    if (state.remaining <= 0) finishGame()
  }, 1000)
}

function stopTimer() {
  if (state.timerId) window.clearInterval(state.timerId)
  state.timerId = null
  const timer = $('#timer')
  if (timer) timer.style.color = ''
}

let audioContext
function playTone(kind) {
  try {
    audioContext ??= new AudioContext()
    if (audioContext.state === 'suspended') void audioContext.resume()
    const tones = { start: [420, 0.07], correct: [720, 0.12], wrong: [190, 0.15], win: [880, 0.2] }
    const [frequency, duration] = tones[kind] ?? tones.start
    const oscillator = audioContext.createOscillator()
    const gain = audioContext.createGain()
    oscillator.type = kind === 'wrong' ? 'sawtooth' : 'triangle'
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(frequency * (kind === 'wrong' ? .72 : 1.35), audioContext.currentTime + duration)
    gain.gain.setValueAtTime(0.001, audioContext.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + .015)
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration)
    oscillator.connect(gain).connect(audioContext.destination)
    oscillator.start()
    oscillator.stop(audioContext.currentTime + duration + .03)
  } catch {  }
}

function bindUi() {
  $$('[data-action="start"], [data-action="restart"]').forEach(button => button.addEventListener('click', startGame))
  $('[data-action="home"]').addEventListener('click', () => { stopTimer(); setScreen('title') })
  $('#next-btn').addEventListener('click', nextQuestion)
  $('#hint-toggle').addEventListener('click', () => {
    const content = $('#hint-content')
    const willShow = content.hidden
    content.hidden = !willShow
    $('#hint-toggle').setAttribute('aria-expanded', String(willShow))
    $('#hint-toggle').textContent = willShow ? 'Hide hint' : 'Show hint'
  })
  $$('.topic-item').forEach(item => item.addEventListener('click', () => {
    setTopic(item.dataset.topic)
    if (state.screen === 'title') return
    const focus = item.textContent.trim()
    $('#feedback').textContent = `${focus} is part of this run.`
    $('#feedback').className = 'feedback'
  }))
  window.addEventListener('keydown', event => {
    if (event.key === 'Enter' && state.screen === 'title') startGame()
    if ((event.key === 'Enter' || event.key === ' ') && state.screen === 'quiz' && !$('#next-btn').hidden) {
      event.preventDefault()
      nextQuestion()
    }
  })
}

function bindPaperclip() {
  const paperclip = $('.pet-two')
  if (!paperclip) return
  const messages = ['Hi! Need a hint?', 'You can do it!', 'Past tense power!', 'Keep your streak alive!']
  let messageIndex = 0
  const react = () => {
    messageIndex = (messageIndex + 1) % messages.length
    paperclip.dataset.message = messages[messageIndex]
    paperclip.setAttribute('aria-label', messages[messageIndex])
    paperclip.title = messages[messageIndex]
    paperclip.classList.remove('is-happy')
    void paperclip.offsetWidth
    paperclip.classList.add('is-happy', 'is-chatty')
    window.setTimeout(() => paperclip.classList.remove('is-happy', 'is-chatty'), 2400)
  }
  paperclip.addEventListener('click', react)
  paperclip.addEventListener('dblclick', event => {
    event.preventDefault()
    paperclip.dataset.message = 'Secret sparkle unlocked!'
    paperclip.setAttribute('aria-label', 'Secret sparkle unlocked!')
    paperclip.title = 'Secret sparkle unlocked!'
    paperclip.classList.remove('is-super-happy')
    void paperclip.offsetWidth
    paperclip.classList.add('is-super-happy', 'is-chatty')
    window.setTimeout(() => paperclip.classList.remove('is-super-happy', 'is-chatty'), 1800)
  })
  paperclip.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      react()
    }
  })
}

function bindWindowDrag() {
  const windowEl = $('.app-shell')
  const handle = $('.app-shell > .topbar')
  if (!windowEl || !handle) return
  let drag = null
  handle.addEventListener('pointerdown', event => {
    if (event.button !== 0) return
    const rect = windowEl.getBoundingClientRect()
    windowEl.style.position = 'fixed'
    windowEl.style.margin = '0'
    windowEl.style.left = `${rect.left}px`
    windowEl.style.top = `${rect.top}px`
    drag = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, left: rect.left, top: rect.top, width: rect.width, height: rect.height }
    windowEl.classList.add('is-dragging')
    handle.setPointerCapture(event.pointerId)
  })
  handle.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.pointerId) return
    const nextLeft = Math.min(Math.max(0, drag.left + event.clientX - drag.startX), Math.max(0, window.innerWidth - drag.width))
    const nextTop = Math.min(Math.max(8, drag.top + event.clientY - drag.startY), Math.max(8, window.innerHeight - drag.height - 34))
    windowEl.style.left = `${nextLeft}px`
    windowEl.style.top = `${nextTop}px`
  })
  const stopDrag = event => {
    if (!drag || event.pointerId !== drag.pointerId) return
    drag = null
    windowEl.classList.remove('is-dragging')
    if (handle.hasPointerCapture(event.pointerId)) handle.releasePointerCapture(event.pointerId)
  }
  handle.addEventListener('pointerup', stopDrag)
  handle.addEventListener('pointercancel', stopDrag)
}

function initScene() {
  const canvas = $('#scene')
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7))
  renderer.setClearColor(0x000000, 0)
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(34, 1, .1, 100)
  camera.position.set(0, 0, 22)
  const group = new THREE.Group()
  scene.add(group)
  scene.add(new THREE.AmbientLight(0xaaa4ff, 1.7))
  const light = new THREE.PointLight(0x77d9ff, 2.4, 35)
  light.position.set(7, 8, 9)
  scene.add(light)

  const board = new THREE.Mesh(new THREE.BoxGeometry(12.6, 8, .35), new THREE.MeshStandardMaterial({ color: 0x32266d, roughness: .78, metalness: .08 }))
  board.position.set(3.5, .25, -2.5)
  board.rotation.set(-.08, -.12, -.08)
  group.add(board)
  const border = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(12.8, 8.2, .38)), new THREE.LineBasicMaterial({ color: 0x826ce1, transparent: true, opacity: .52 }))
  border.position.copy(board.position); border.rotation.copy(board.rotation); group.add(border)

  const makeBar = (width, height, color, x, y, z, angle = 0) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, .08), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .78 }))
    mesh.position.set(x, y, z); mesh.rotation.z = angle; group.add(mesh); return mesh
  }
  makeBar(4.8, .12, 0xffd56a, 1.2, 2.1, -2.1, -.08)
  makeBar(3.1, .1, 0x76dce9, 2.4, 1.35, -2.08, .06)
  makeBar(4.2, .1, 0xff9a76, 1.15, -.75, -2.08, .04)
  makeBar(2.6, .09, 0xffffff, 3.1, -1.45, -2.08, -.12)

  const cardColors = [0xffd56a, 0x8ce5ee, 0xff9a76, 0x9c83ee]
  for (let i = 0; i < 8; i += 1) {
    const card = new THREE.Mesh(new THREE.BoxGeometry(.34 + (i % 3) * .14, .34 + (i % 2) * .16, .16), new THREE.MeshStandardMaterial({ color: cardColors[i % cardColors.length], emissive: cardColors[i % cardColors.length], emissiveIntensity: .12 }))
    const angle = (i / 8) * Math.PI * 2
    card.position.set(Math.cos(angle) * (8 + (i % 2)), Math.sin(angle) * 4.5, -1 + (i % 3) * .7)
    card.rotation.z = angle
    card.userData.phase = i * .7
    group.add(card)
  }
  const particles = new THREE.Group()
  const particleGeometry = new THREE.SphereGeometry(.055, 6, 6)
  for (let i = 0; i < 70; i += 1) {
    const material = new THREE.MeshBasicMaterial({ color: i % 3 === 0 ? 0xffd56a : 0x8173dc, transparent: true, opacity: .65 })
    const particle = new THREE.Mesh(particleGeometry, material)
    particle.position.set((Math.random() - .5) * 25, (Math.random() - .5) * 14, -5 - Math.random() * 5)
    particle.userData.phase = Math.random() * Math.PI * 2
    particles.add(particle)
  }
  scene.add(particles)

  const resize = () => {
    const width = window.innerWidth, height = window.innerHeight
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }
  window.addEventListener('resize', resize)
  resize()
  const clock = new THREE.Clock()
  const animate = () => {
    const time = clock.getElapsedTime()
    group.rotation.y = Math.sin(time * .16) * .04
    group.rotation.x = Math.cos(time * .12) * .018
    group.children.forEach(child => {
      if (child.userData.phase !== undefined) child.position.y += Math.sin(time * .7 + child.userData.phase) * .0008
    })
    particles.children.forEach((particle, index) => { particle.position.y += Math.sin(time * .25 + particle.userData.phase) * .0012; particle.material.opacity = .35 + .25 * Math.sin(time * .6 + index) ** 2 })
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()
}

bindUi()
bindPaperclip()
bindWindowDrag()
initScene()
setTimeout(() => setScreen('title'), 360)
window.__game = { state, startGame, nextQuestion, finishGame }
