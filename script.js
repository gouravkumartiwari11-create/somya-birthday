/* All interactions are kept in this file so the project works without a build step. */
document.addEventListener("DOMContentLoaded", () => {
  const startLink = document.querySelector(".start-button");
  const surpriseContent = document.getElementById("surpriseContent");
  const memoryProgress = document.getElementById("memoryProgress");
  const memoryProgressBar = document.getElementById("memoryProgressBar");
  const starGamePrompt = document.getElementById("starGamePrompt");
  const starGameMessage = document.getElementById("starGameMessage");
  const starChoices = document.getElementById("starChoices");
  const memoryFinishMessage = document.getElementById("memoryFinishMessage");
  const memorySlideshow = document.getElementById("memorySlideshow");
  const memorySlideNumber = document.getElementById("memorySlideNumber");
  const memorySlideImage = document.getElementById("memorySlideImage");
  const memorySlideCaption = document.getElementById("memorySlideCaption");
  const nextMemoryButton = document.getElementById("nextMemoryButton");
  const blowCandlesButton = document.getElementById("blowCandlesButton");
  const candleMessage = document.getElementById("candleMessage");
  const reasonText = document.getElementById("reasonText");
  const reasonNumber = document.getElementById("reasonNumber");
  const reasonDots = document.getElementById("reasonDots");
  const futureMessage = document.getElementById("futureMessage");
  const futureSection = document.getElementById("futureSection");
  const roseGarden = document.getElementById("roseGarden");
  const roseMessage = document.getElementById("roseMessage");
  const wishMessage = document.getElementById("wishMessage");
  const giftBox = document.getElementById("giftBox");
  const giftMessage = document.getElementById("giftMessage");
  const dateIdeaMessage = document.getElementById("dateIdeaMessage");
  const shareMessage = document.getElementById("shareMessage");
  const gameHearts = document.getElementById("gameHearts");
  const gameProgress = document.querySelector(".game-progress");
  const gameResultTitle = document.getElementById("gameResultTitle");
  const gameLoveNote = document.getElementById("gameLoveNote");
  const nextGameStage = document.getElementById("nextGameStage");
  const wishForm = document.getElementById("wishForm");
  const wishInput = document.getElementById("wishInput");
  const wishList = document.getElementById("wishList");
  const wishStatus = document.getElementById("wishStatus");
  const downloadWishes = document.getElementById("downloadWishes");
  const complaintForm = document.getElementById("complaintForm");
  const complaintList = document.getElementById("complaintList");
  const complaintEditor = document.getElementById("complaintEditor");
  const complaintStatus = document.getElementById("complaintStatus");
  const complaintConfirm = document.getElementById("complaintConfirm");
  const complaintConfirmPrompt = document.getElementById("complaintConfirmPrompt");
  const complaintConfirmStatus = document.getElementById("complaintConfirmStatus");
  const complaintSaved = document.getElementById("complaintSaved");
  const complaintSavedList = document.getElementById("complaintSavedList");
  const complaintSavedMessage = document.getElementById("complaintSavedMessage");
  const canvas = document.getElementById("celebrationCanvas");
  const context = canvas.getContext("2d");
  const WISH_STORAGE_KEY = "somya-birthday-wishes";
  const COMPLAINT_STORAGE_KEY = "somya-birthday-complaints";
  const complaintLevels = [
    { label: "Kam gussa", emoji: "🙂" },
    { label: "Halka gussa", emoji: "😕" },
    { label: "Kaafi gussa", emoji: "😠" },
    { label: "Bahut zyada gussa", emoji: "😡" }
  ];

  // Local time keeps the counter aligned with your anniversary date.
  const RELATIONSHIP_START_DATE = new Date(2024, 7, 2, 0, 0, 0);

  const reasons = [
    "You make even the most ordinary day feel special.",
    "Your smile can turn my whole day around.",
    "You are wonderfully, unmistakably you.",
    "You make me laugh when I need it most.",
    "Talking with you is my favorite kind of time.",
    "You care in a way that makes people feel seen.",
    "You make little moments worth remembering.",
    "You have the most beautiful heart.",
    "You make every place feel a little more like home.",
    "You bring so much warmth wherever you go.",
    "You are my favorite person to share a silly thought with.",
    "You make me want to be kinder and better.",
    "You have a magic way of making things feel okay.",
    "You are thoughtful in all the little ways that matter.",
    "Your happiness makes me happy.",
    "You make quiet moments feel comfortable.",
    "You are stronger than you give yourself credit for.",
    "You make every conversation feel like my favorite one.",
    "You have a laugh I could listen to forever.",
    "You make kindness look effortless.",
    "You are beautiful inside and out.",
    "You make even a simple day feel like an occasion.",
    "You always find a way to make me smile.",
    "You inspire me with the way you keep going.",
    "You are the person I want to tell everything to.",
    "You make being together feel easy.",
    "You notice the small things that other people miss.",
    "You make my world brighter just by being in it.",
    "You are endlessly fun to be around.",
    "You have a way of making people feel welcome.",
    "You are full of lovely surprises.",
    "You turn shared memories into my favorite stories.",
    "You are someone I can always be myself with.",
    "You make caring feel like the easiest thing in the world.",
    "You are so much fun to dream about the future with.",
    "You make every little celebration better.",
    "You make me feel lucky in a hundred different ways.",
    "You bring out the softest, happiest part of me.",
    "You make home feel like a person.",
    "You are patient, generous, and full of love.",
    "You make the world feel a little less serious.",
    "Your dreams matter to me because you matter to me.",
    "You are my favorite notification, thought, and hello.",
    "You make love feel warm and real.",
    "You are the best part of so many of my days.",
    "You have a beautiful way of being there for people.",
    "You make me excited for all the moments still to come.",
    "You are one of a kind, and I get to love you.",
    "You make my heart feel full.",
    "And most of all, because you are Somya—and I love you."
  ];

  const roseNotes = [
    "You make my world bloom. 🌷",
    "You deserve every beautiful thing. 🌸",
    "My heart picks you, every time. ❤️",
    "You are my favorite kind of magic. ✨",
    "A little flower for my forever favorite. 🌹"
  ];

  const birthdayWishes = [
    "May this year bring you the kind of joy you give everyone else. ✨",
    "May every dream you hold close find its way to you. 🌙",
    "May you always remember how deeply you are loved. ❤️",
    "May your days be filled with laughter, peace, and lovely surprises. 🌟",
    "May every new chapter be even more beautiful than the last. 💫",
    "May all the little things you wish for come true. 🌠",
    "May your birthday feel as wonderful as you make life feel. 🎂"
  ];

  const futureNote = "Hey Somya, it’s us from a little further down the road. We hope you still laugh at the same silly things and make a wish at every birthday. We’re so proud of everything you’ve become. Keep being your wonderful self—there are still so many sunsets, stories, and ordinary perfect days waiting for us. And just so you know: Gourav still thinks you’re the best part of every day. ❤️";
  const dateIdeas = [
    "A sunset walk, your favorite snacks, and absolutely nowhere else to be. 🌅",
    "A cozy movie night where you get to pick every film and treat. 🍿",
    "A little café date and a long conversation that makes time disappear. ☕",
    "A playlist, a scenic drive, and singing along like nobody can hear us. 🎶",
    "A picnic for two with something sweet and a view we can remember. 🧺",
    "A tiny adventure somewhere new, with you as my favorite travel buddy. 🗺️",
    "A home-cooked dinner, a candle or two, and all of my attention. 🕯️"
  ];
  const memoryPhotos = [
    { src: "assets/photo-1.jpg", alt: "Somya smiling in her glasses", caption: "That smile is still my favorite view. ❤️" },
    { src: "assets/photo-2.jpg", alt: "Somya making a playful face", caption: "Anywhere feels special when I'm with you. ✨" },
    { src: "assets/photo-3.jpg", alt: "Somya sending a kiss", caption: "Sending this one right back to you: a little kiss and all my love. 💋" },
    { src: "assets/photo-4.jpg", alt: "Somya smiling in a close-up selfie", caption: "The little everyday moments with you mean everything. 🌸" },
    { src: "assets/photo-5.jpg", alt: "Somya making a cute face", caption: "Every version of you is my favorite version. 💗" },
    { src: "assets/photo-6.jpg", alt: "Somya posing with a peace sign", caption: "You are cute, funny, and impossible not to adore. 🥰" },
    { src: "assets/photo-7.jpg", alt: "The letters S O M Y A on a keyboard", caption: "Even the keyboard knows who the star of this birthday page is. 😉" },
    { src: "assets/photo-8.jpg", alt: "Somya in glasses and a patterned shawl", caption: "My favorite person, looking like a whole love story. ❤️" },
    { src: "assets/photo-9.jpg", alt: "Somya making a kissy face in her glasses", caption: "A tiny kiss from your favorite girl. 💋" },
    { src: "assets/photo-10.png", alt: "Somya smiling with a playful bow filter", caption: "Your smile could outshine every little star. ✨" },
    { src: "assets/photo-11.png", alt: "Somya making a playful face with a filter", caption: "Cute, silly, and completely one of a kind. 💗" },
    { src: "assets/photo-12.jpg", alt: "Somya posing with a playful hamster filter", caption: "You always find a way to make me smile. 🐹" },
    { src: "assets/photo-13.jpg", alt: "Somya in glasses with a bright yellow background", caption: "A little sunshine, saved just for me. 🌼" },
    { src: "assets/photo-14.jpg", alt: "Somya smiling with a playful face filter", caption: "Every silly little moment becomes a favorite with you. 🐼" },
    { src: "assets/photo-15.jpg", alt: "Somya sitting in a car and smiling", caption: "My favorite travel buddy, wherever we go. 🚗" },
    { src: "assets/photo-16.jpg", alt: "A playful close-up selfie", caption: "A little mystery, a lot of love. 💌" },
    { src: "assets/photo-17.jpg", alt: "Somya in glasses wearing a red patterned outfit", caption: "Beautiful in every moment, and always my favorite. ❤️" }
  ];
  const gameNotes = [
    ["Even when luck plays hide-and-seek, my heart still finds its way to you. ❤️", "You could pick every wrong heart and still be my favorite choice. 💌", "A little miss can't change this: you make my whole world brighter. ✨"],
    ["Stage two, same truth: you make every day feel a little more lovely. 🌷", "Your smile is my favorite prize, and I get to see it in my dreams. 💗", "Wrong heart, right girl. I would choose you every single time. 💞"],
    ["You make my heart feel at home, in every stage and every season. 🏡", "Even the game knows you're the sweetest part of my story. 📖", "Three hearts, one secret: Gourav loves you more than words can say. 💖"],
    ["You are the plot twist that made my life so much more beautiful. 🌟", "Win or lose, you still have my whole heart. No game required. 💘", "A little challenge for my favorite person in the entire universe. 🌙"],
    ["Final stage, forever feeling: I am so lucky I get to love you. 🥰", "The game may end, but my reasons to love you never will. ♾️", "You reached the last stage—your real prize is my love, always. 👑"]
  ];

  let currentReason = 0;
  let gameStage = 0;
  let gameRound = 1;
  let gameAnswer = 0;
  let gameFinished = false;
  let wishes = loadWishes();
  let hasBlownCandles = false;
  let confettiPieces = [];
  let fireworkParticles = [];
  let animationFrame = 0;
  let revealFutureOnScroll = false;
  let memoryCompletionScrollY = 0;
  let complaintDrafts = [{ text: "", level: 1 }];
  let savedComplaints = [];
  let complaintConfirmStep = 0;
  // The intro acts as the cover; the main surprise is revealed only after the start button.
  startLink.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.add("started");
    surpriseContent.setAttribute("aria-hidden", "false");
    setupScrollReveals();
    document.getElementById("cake").scrollIntoView({ behavior: "smooth" });
  });
  surpriseContent.setAttribute("aria-hidden", "true");

  function updateScrollProgress() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    document.getElementById("scrollProgress").style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
    if (revealFutureOnScroll && window.scrollY > memoryCompletionScrollY) {
      futureSection.hidden = false;
      revealFutureOnScroll = false;
    }
  }
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", updateScrollProgress);
  updateScrollProgress();

  // Reveal sections as they enter view, but keep the cover page immediately readable.
  function setupScrollReveals() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const revealItems = document.querySelectorAll(
      ".surprise-content .section-heading, .reason-card, .future-card, .counter-unit, .rose-button, .star-game-card, .date-idea-card, .complaint-game-card, .love-game-card, .wishbook-card, .star-sky, .gift-box, .letter-card"
    );
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => {
      item.classList.add("scroll-reveal");
      revealObserver.observe(item);
    });
  }

  function renderReason() {
    reasonText.textContent = reasons[currentReason];
    reasonNumber.innerHTML = `${String(currentReason + 1).padStart(2, "0")} <span>/ ${reasons.length}</span>`;
    [...reasonDots.children].forEach((dot, index) => {
      dot.setAttribute("aria-current", String(index === currentReason));
    });
  }

  reasons.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "reason-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Show reason ${index + 1}`);
    dot.addEventListener("click", () => {
      currentReason = index;
      renderReason();
    });
    reasonDots.append(dot);
  });
  renderReason();

  document.getElementById("previousReason").addEventListener("click", () => {
    currentReason = (currentReason - 1 + reasons.length) % reasons.length;
    renderReason();
  });
  document.getElementById("nextReason").addEventListener("click", () => {
    currentReason = (currentReason + 1) % reasons.length;
    renderReason();
  });

  function renderGameStage() {
    gameFinished = false;
    gameAnswer = Math.floor(Math.random() * 3);
    gameHearts.replaceChildren();
    gameResultTitle.textContent = "";
    gameLoveNote.textContent = "";
    nextGameStage.hidden = true;
    document.getElementById("gameStageLabel").textContent = `STAGE ${gameStage + 1} OF 5`;
    document.getElementById("gameRoundLabel").textContent = `ROUND ${gameRound}`;
    document.getElementById("gamePrompt").textContent = gameStage === 4
      ? "Final stage: pick the heart holding your forever note."
      : "Which heart is keeping a secret?";
    gameProgress.style.width = `${((gameStage + 1) / gameNotes.length) * 100}%`;
    gameProgress.parentElement.setAttribute("aria-valuenow", String(gameStage + 1));

    for (let index = 0; index < 3; index += 1) {
      const heart = document.createElement("button");
      heart.type = "button";
      heart.className = "game-heart";
      heart.setAttribute("aria-label", `Choose heart ${index + 1}`);
      heart.innerHTML = '<span class="game-heart-symbol" aria-hidden="true">♡</span><span class="game-heart-sparkle" aria-hidden="true">✦</span>';
      heart.addEventListener("click", () => revealGameResult(index));
      gameHearts.append(heart);
    }
  }

  function revealGameResult(selectedHeart) {
    if (gameFinished) return;
    gameFinished = true;
    const won = selectedHeart === gameAnswer;
    const hearts = [...gameHearts.children];
    hearts.forEach((heart, index) => {
      heart.disabled = true;
      if (index === gameAnswer) heart.classList.add("is-winning-heart");
      if (index === selectedHeart) heart.classList.add("is-selected-heart");
    });
    gameResultTitle.textContent = won ? "You found the lucky heart! ✨" : "Oh no, this round got away... 💕";
    const noteOptions = gameNotes[gameStage];
    gameLoveNote.textContent = noteOptions[(gameRound - 1) % noteOptions.length];
    gameLoveNote.classList.remove("message-pop");
    void gameLoveNote.offsetWidth;
    gameLoveNote.classList.add("message-pop");
    nextGameStage.hidden = false;
    nextGameStage.innerHTML = gameStage === gameNotes.length - 1
      ? '<span>Play the five stages again</span><span aria-hidden="true"> ♡</span>'
      : '<span>Next stage</span><span aria-hidden="true"> →</span>';
  }

  nextGameStage.addEventListener("click", () => {
    if (!gameFinished) return;
    if (gameStage === gameNotes.length - 1) {
      gameStage = 0;
      gameRound += 1;
    } else {
      gameStage += 1;
    }
    renderGameStage();
  });
  renderGameStage();

  function loadWishes() {
    try {
      const savedWishes = JSON.parse(window.localStorage.getItem(WISH_STORAGE_KEY) || "[]");
      if (!Array.isArray(savedWishes)) throw new TypeError("Saved wishes should be a list.");
      return savedWishes.filter((wish) => wish && typeof wish.text === "string" && typeof wish.createdAt === "string");
    } catch (error) {
      wishStatus.textContent = "Saved wishes could not be loaded in this browser. You can still add wishes for this visit.";
      return [];
    }
  }

  function saveWishes() {
    try {
      window.localStorage.setItem(WISH_STORAGE_KEY, JSON.stringify(wishes));
      wishStatus.textContent = "Your wishes are saved only in this browser on this device.";
      return true;
    } catch (error) {
      wishStatus.textContent = "This browser could not save your wishes. Download them before closing this page.";
      return false;
    }
  }

  function renderWishes() {
    wishList.replaceChildren();
    wishes.forEach((wish, index) => {
      const item = document.createElement("li");
      item.className = "wish-list-item";
      const text = document.createElement("p");
      text.className = "wish-entry-text";
      text.textContent = wish.text;
      const date = document.createElement("time");
      date.className = "wish-entry-date";
      date.dateTime = wish.createdAt;
      date.textContent = new Date(wish.createdAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "wish-remove-button";
      remove.textContent = "Remove";
      remove.setAttribute("aria-label", `Remove wish ${index + 1}`);
      remove.addEventListener("click", () => {
        wishes.splice(index, 1);
        saveWishes();
        renderWishes();
      });
      item.append(text, date, remove);
      wishList.append(item);
    });
    document.getElementById("emptyWishBook").hidden = wishes.length > 0;
    downloadWishes.disabled = wishes.length === 0;
  }

  wishInput.addEventListener("input", () => {
    document.getElementById("wishCharacterCount").textContent = `${wishInput.value.length} / 240`;
  });
  wishForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const wishText = wishInput.value.trim();
    if (wishText.length < 3) {
      wishStatus.textContent = "Write at least 3 characters for your wish. 💌";
      wishInput.focus();
      return;
    }
    if (wishText.length > 240) {
      wishStatus.textContent = "Keep your wish under 240 characters, please.";
      wishInput.focus();
      return;
    }
    wishes.unshift({ text: wishText, createdAt: new Date().toISOString() });
    saveWishes();
    renderWishes();
    wishInput.value = "";
    document.getElementById("wishCharacterCount").textContent = "0 / 240";
    wishStatus.textContent = "A beautiful wish, saved in your little book. ✨";
  });
  downloadWishes.addEventListener("click", () => {
    if (!wishes.length) return;
    const wishText = wishes.map((wish, index) => `${index + 1}. ${wish.text}`).join("\n\n");
    const file = new Blob([`Somya's Birthday Wish Book\n\n${wishText}\n`], { type: "text/plain;charset=utf-8" });
    const downloadUrl = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "somya-birthday-wishes.txt";
    link.click();
    URL.revokeObjectURL(downloadUrl);
    wishStatus.textContent = "Your wish book has been downloaded. Keep it somewhere safe. 💌";
  });
  renderWishes();

  function loadSavedComplaints() {
    try {
      const saved = JSON.parse(window.localStorage.getItem(COMPLAINT_STORAGE_KEY) || "[]");
      if (!Array.isArray(saved)) throw new TypeError("Saved complaints should be a list.");
      return saved.filter((complaint) =>
        complaint &&
        typeof complaint.text === "string" &&
        Number.isInteger(complaint.level) &&
        complaint.level >= 1 &&
        complaint.level <= complaintLevels.length &&
        typeof complaint.createdAt === "string"
      );
    } catch (error) {
      complaintStatus.textContent = "I couldn’t load saved reasons in this browser. You can still write them for this visit.";
      return [];
    }
  }

  function saveComplaintReasons(reasonsToSave) {
    try {
      window.localStorage.setItem(COMPLAINT_STORAGE_KEY, JSON.stringify(reasonsToSave));
      return true;
    } catch (error) {
      complaintStatus.textContent = "This browser couldn’t save your reasons. They’re still here for this visit—please try again.";
      return false;
    }
  }

  function renderComplaintDrafts(focusIndex = -1) {
    complaintList.replaceChildren();
    complaintDrafts.forEach((complaint, index) => {
      const item = document.createElement("fieldset");
      item.className = "complaint-item";

      const legend = document.createElement("legend");
      legend.textContent = `Reason ${index + 1}`;

      const reasonLabel = document.createElement("label");
      reasonLabel.className = "complaint-reason-label";
      reasonLabel.htmlFor = `complaintReason${index}`;
      reasonLabel.textContent = "What did I do that made you gussa?";

      const reasonInput = document.createElement("textarea");
      reasonInput.id = `complaintReason${index}`;
      reasonInput.rows = 2;
      reasonInput.maxLength = 300;
      reasonInput.placeholder = "Tell me honestly… I promise I’ll listen 💗";
      reasonInput.value = complaint.text;
      reasonInput.addEventListener("input", () => {
        complaintDrafts[index].text = reasonInput.value;
      });

      const levelRow = document.createElement("div");
      levelRow.className = "complaint-level-row";
      const levelLabel = document.createElement("label");
      levelLabel.htmlFor = `complaintLevel${index}`;
      levelLabel.textContent = "Kitna gussa?";

      const levelControl = document.createElement("div");
      levelControl.className = "complaint-level-control";
      const levelInput = document.createElement("input");
      levelInput.id = `complaintLevel${index}`;
      levelInput.type = "range";
      levelInput.min = "1";
      levelInput.max = String(complaintLevels.length);
      levelInput.step = "1";
      levelInput.value = String(complaint.level);
      const levelOutput = document.createElement("output");
      levelOutput.className = "complaint-level-output";

      const updateLevel = () => {
        const level = Number(levelInput.value);
        const mood = complaintLevels[level - 1];
        complaintDrafts[index].level = level;
        levelInput.setAttribute("aria-valuetext", `${mood.label} ${mood.emoji}`);
        levelOutput.textContent = `${mood.emoji} ${mood.label}`;
      };
      levelInput.addEventListener("input", updateLevel);
      updateLevel();
      levelControl.append(levelInput, levelOutput);
      levelRow.append(levelLabel, levelControl);

      const itemActions = document.createElement("div");
      itemActions.className = "complaint-item-actions";
      const removeButton = document.createElement("button");
      removeButton.className = "text-button complaint-remove-button";
      removeButton.type = "button";
      removeButton.textContent = "Remove this reason";
      removeButton.setAttribute("aria-label", `Remove reason ${index + 1}`);
      removeButton.hidden = complaintDrafts.length === 1;
      removeButton.addEventListener("click", () => {
        complaintDrafts.splice(index, 1);
        if (complaintDrafts.length === 0) complaintDrafts.push({ text: "", level: 1 });
        renderComplaintDrafts();
      });
      itemActions.append(removeButton);

      item.append(legend, reasonLabel, reasonInput, levelRow, itemActions);
      complaintList.append(item);
      if (index === focusIndex) reasonInput.focus();
    });
  }

  function renderSavedComplaints() {
    complaintSavedList.replaceChildren();
    savedComplaints.forEach((complaint, index) => {
      const item = document.createElement("li");
      item.className = "complaint-saved-item";
      const text = document.createElement("p");
      text.className = "complaint-saved-text";
      text.textContent = complaint.text;
      const mood = complaintLevels[complaint.level - 1];
      const intensity = document.createElement("span");
      intensity.className = "complaint-saved-intensity";
      intensity.textContent = `${mood.emoji} ${mood.label}`;
      item.setAttribute("aria-label", `Reason ${index + 1}: ${complaint.text}, ${mood.label}`);
      item.append(text, intensity);
      complaintSavedList.append(item);
    });
    complaintSavedMessage.textContent = `Saved ${savedComplaints.length} ${savedComplaints.length === 1 ? "reason" : "reasons"} only in this browser on this device. Thank you for telling me, cutie. ❤️`;
  }

  function openComplaintEditor(addAnother = false) {
    if (savedComplaints.length && complaintDrafts.length === 1 && complaintDrafts[0].text === "") {
      complaintDrafts = savedComplaints.map(({ text, level }) => ({ text, level }));
    }
    if (addAnother) complaintDrafts.push({ text: "", level: 1 });
    complaintSaved.hidden = true;
    complaintConfirm.hidden = true;
    complaintEditor.hidden = false;
    complaintStatus.textContent = "Your reasons are saved only in this browser on this device. 💗";
    renderComplaintDrafts(addAnother ? complaintDrafts.length - 1 : -1);
  }

  savedComplaints = loadSavedComplaints();
  if (savedComplaints.length) {
    complaintEditor.hidden = true;
    complaintSaved.hidden = false;
    renderSavedComplaints();
  } else {
    renderComplaintDrafts();
  }

  document.getElementById("addComplaintButton").addEventListener("click", () => {
    complaintDrafts.push({ text: "", level: 1 });
    renderComplaintDrafts(complaintDrafts.length - 1);
  });

  complaintForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emptyReasonIndex = complaintDrafts.findIndex((complaint) => complaint.text.trim().length < 3);
    if (emptyReasonIndex !== -1) {
      complaintStatus.textContent = `Add a little more to reason ${emptyReasonIndex + 1} before we finish. 💌`;
      document.getElementById(`complaintReason${emptyReasonIndex}`).focus();
      return;
    }

    complaintConfirmStep = 1;
    complaintConfirmPrompt.textContent = "Pakka sure ho na, bas itna hi hai? 🥺";
    complaintConfirmStatus.textContent = "";
    complaintEditor.hidden = true;
    complaintConfirm.hidden = false;
  });

  document.getElementById("complaintYesButton").addEventListener("click", () => {
    if (complaintConfirmStep === 1) {
      complaintConfirmStep = 2;
      complaintConfirmPrompt.textContent = "Ek baar aur soch lo, cutie… pakka sure na? 💖";
      complaintConfirmStatus.textContent = "";
      return;
    }
    if (complaintConfirmStep !== 2) return;

    const reasonsToSave = complaintDrafts.map((complaint) => ({
      text: complaint.text.trim(),
      level: complaint.level,
      createdAt: new Date().toISOString()
    }));
    if (!saveComplaintReasons(reasonsToSave)) {
      complaintConfirmStatus.textContent = complaintStatus.textContent;
      return;
    }

    savedComplaints = reasonsToSave;
    complaintConfirm.hidden = true;
    complaintSaved.hidden = false;
    renderSavedComplaints();
  });

  document.getElementById("complaintNoButton").addEventListener("click", () => {
    complaintConfirmStep = 0;
    complaintDrafts.push({ text: "", level: 1 });
    complaintStatus.textContent = "Hehe, add anything else you remember—I’m listening. 🥺";
    complaintConfirm.hidden = true;
    complaintEditor.hidden = false;
    renderComplaintDrafts(complaintDrafts.length - 1);
  });

  document.getElementById("addMoreComplaintsButton").addEventListener("click", () => {
    complaintDrafts = savedComplaints.map(({ text, level }) => ({ text, level }));
    openComplaintEditor(true);
  });

  document.getElementById("downloadComplaintsButton").addEventListener("click", () => {
    if (!savedComplaints.length) return;
    const complaintText = savedComplaints.map((complaint, index) => {
      const mood = complaintLevels[complaint.level - 1];
      return `${index + 1}. ${complaint.text}\n   Gussa level: ${mood.label} ${mood.emoji}`;
    }).join("\n\n");
    const file = new Blob([`Somya's reasons for being gussa\n\n${complaintText}\n`], { type: "text/plain;charset=utf-8" });
    const downloadUrl = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "somya-complaint-reasons.txt";
    link.click();
    URL.revokeObjectURL(downloadUrl);
    complaintSavedMessage.textContent = "Your reasons are saved on this device—and downloaded as a note you can share with Gourav. 💌";
  });

  // Each card is a real button, so the envelope interaction works with keyboard and touch.
  document.querySelectorAll(".envelope-card").forEach((card) => {
    card.addEventListener("click", () => {
      const isOpen = card.getAttribute("aria-expanded") === "true";
      card.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  let currentMemoryIndex = 0;
  let correctStarIndex = 0;

  function setMemoryProgress(foundCount = currentMemoryIndex) {
    memoryProgress.textContent = `MEMORY ${currentMemoryIndex + 1} OF ${memoryPhotos.length}`;
    memoryProgressBar.style.width = `${(foundCount / memoryPhotos.length) * 100}%`;
    document.querySelector(".star-game-track").setAttribute("aria-valuenow", String(foundCount));
  }

  function showMemoryPhoto() {
    starChoices.hidden = true;
    starGamePrompt.hidden = true;
    starGameMessage.textContent = "You found the lucky star! Here comes your surprise... 💖";
    memorySlideNumber.textContent = `A little memory ${currentMemoryIndex + 1} of ${memoryPhotos.length}`;
    memorySlideImage.src = memoryPhotos[currentMemoryIndex].src;
    memorySlideImage.alt = memoryPhotos[currentMemoryIndex].alt;
    memorySlideCaption.textContent = memoryPhotos[currentMemoryIndex].caption;
    memorySlideshow.hidden = false;
    setMemoryProgress(currentMemoryIndex + 1);
  }

  function renderStarChoices() {
    correctStarIndex = Math.floor(Math.random() * 3);
    starChoices.replaceChildren();
    starChoices.hidden = false;
    starGamePrompt.hidden = false;
    memorySlideshow.hidden = true;
    starGameMessage.textContent = "Tap a star. If it's the lucky one, a photo appears! 🌟";
    nextMemoryButton.disabled = false;
    nextMemoryButton.textContent = "Find the next star →";
    setMemoryProgress();

    for (let index = 0; index < 3; index += 1) {
      const star = document.createElement("button");
      star.type = "button";
      star.className = "memory-star";
      star.setAttribute("aria-label", `Choose star ${index + 1}`);
      star.innerHTML = '<span aria-hidden="true">✦</span>';
      star.addEventListener("click", () => {
        if (index === correctStarIndex) {
          showMemoryPhoto();
        } else {
          star.classList.add("is-wrong");
          star.disabled = true;
          starGameMessage.textContent = "Not that star—try one of the others! 💫";
        }
      });
      starChoices.append(star);
    }
  }

  renderStarChoices();
  nextMemoryButton.addEventListener("click", () => {
    if (currentMemoryIndex === memoryPhotos.length - 1) {
      memoryProgress.textContent = `ALL ${memoryPhotos.length} MEMORIES FOUND!`;
      memoryProgressBar.style.width = "100%";
      document.querySelector(".star-game-track").setAttribute("aria-valuenow", String(memoryPhotos.length));
      starGamePrompt.textContent = "You found every little memory! 💗";
      starGamePrompt.hidden = false;
      starChoices.hidden = true;
      starGameMessage.textContent = "17 stars, 17 memories, and one very loved girl. Happy birthday, Somya! ❤️";
      memoryFinishMessage.hidden = false;
      memoryCompletionScrollY = window.scrollY;
      revealFutureOnScroll = true;
      nextMemoryButton.textContent = "All memories found 💗";
      nextMemoryButton.disabled = true;
      return;
    }

    currentMemoryIndex += 1;
    renderStarChoices();
  });

  // Type the future note one character at a time when its section comes into view.
  let hasTypedFutureNote = false;
  const futureObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting) && !hasTypedFutureNote) {
      hasTypedFutureNote = true;
      typeMessage(futureNote, futureMessage);
      futureObserver.disconnect();
    }
  }, { threshold: 0.25 });
  futureObserver.observe(document.querySelector(".future-card"));

  function typeMessage(message, target) {
    let position = 0;
    const typingTimer = window.setInterval(() => {
      target.textContent = message.slice(0, position + 1);
      position += 1;
      if (position >= message.length) window.clearInterval(typingTimer);
    }, 29);
  }

  // Display elapsed relationship time, clamping a future start date to zero.
  function updateRelationshipCounter() {
    const elapsedSeconds = Math.max(0, Math.floor((Date.now() - RELATIONSHIP_START_DATE.getTime()) / 1000));
    document.getElementById("counterDays").textContent = String(Math.floor(elapsedSeconds / 86400));
    document.getElementById("counterHours").textContent = String(Math.floor((elapsedSeconds % 86400) / 3600)).padStart(2, "0");
    document.getElementById("counterMinutes").textContent = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, "0");
    document.getElementById("counterSeconds").textContent = String(elapsedSeconds % 60).padStart(2, "0");
  }
  updateRelationshipCounter();
  window.setInterval(updateRelationshipCounter, 1000);

  // Generate a small accessible garden of clickable roses from the message list.
  roseNotes.forEach((note, index) => {
    const rose = document.createElement("button");
    rose.type = "button";
    rose.className = "rose-button";
    rose.setAttribute("aria-label", `Read rose message ${index + 1}`);
    rose.innerHTML = '<span class="rose-bloom" aria-hidden="true">✿</span><span class="rose-stem" aria-hidden="true"></span><span class="rose-leaf" aria-hidden="true"></span>';
    rose.addEventListener("click", () => {
      roseMessage.textContent = note;
      roseMessage.classList.remove("message-pop");
      void roseMessage.offsetWidth;
      roseMessage.classList.add("message-pop");
    });
    roseGarden.append(rose);
  });

  let previousDateIdea = -1;
  document.getElementById("dateIdeaButton").addEventListener("click", () => {
    let nextIdea = Math.floor(Math.random() * dateIdeas.length);
    if (dateIdeas.length > 1) {
      while (nextIdea === previousDateIdea) nextIdea = Math.floor(Math.random() * dateIdeas.length);
    }
    previousDateIdea = nextIdea;
    dateIdeaMessage.textContent = dateIdeas[nextIdea];
    dateIdeaMessage.classList.remove("message-pop");
    void dateIdeaMessage.offsetWidth;
    dateIdeaMessage.classList.add("message-pop");
  });

  document.querySelectorAll(".wish-star").forEach((star) => {
    star.addEventListener("click", () => {
      const wish = birthdayWishes[Math.floor(Math.random() * birthdayWishes.length)];
      wishMessage.textContent = wish;
    });
  });

  giftBox.addEventListener("click", () => {
    const isOpen = giftBox.getAttribute("aria-expanded") === "true";
    giftBox.setAttribute("aria-expanded", String(!isOpen));
    giftMessage.textContent = isOpen
      ? "Your surprise is one click away. 🎁"
      : "Surprise! Your gift is a whole year of love, laughter, and choosing each other. ❤️";
    if (!isOpen) launchConfetti(100);
  });

  // Confetti is drawn on one canvas so no decorative DOM nodes are left behind.
  function resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * pixelRatio);
    canvas.height = Math.floor(window.innerHeight * pixelRatio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function launchConfetti(count) {
    const colors = ["#ff789b", "#f7d99d", "#ffc1cf", "#bfa0de", "#fff2df"];
    confettiPieces = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * window.innerHeight * 0.3,
      width: 4 + Math.random() * 6,
      height: 6 + Math.random() * 8,
      speed: 2 + Math.random() * 4,
      drift: (Math.random() - 0.5) * 2.5,
      rotation: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.12,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    startCelebrationAnimation();
  }

  function launchFireworks() {
    const colors = ["#ff789b", "#f7d99d", "#ffc1cf", "#c7a6ed", "#ffffff"];
    const burstPositions = [
      { x: window.innerWidth * 0.22, y: window.innerHeight * 0.3 },
      { x: window.innerWidth * 0.5, y: window.innerHeight * 0.2 },
      { x: window.innerWidth * 0.78, y: window.innerHeight * 0.34 }
    ];
    fireworkParticles = burstPositions.flatMap((burst) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      return Array.from({ length: 34 }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.2 + Math.random() * 3.2;
        return {
          x: burst.x,
          y: burst.y,
          velocityX: Math.cos(angle) * speed,
          velocityY: Math.sin(angle) * speed,
          gravity: 0.025 + Math.random() * 0.025,
          life: 42 + Math.floor(Math.random() * 34),
          color
        };
      });
    });
    startCelebrationAnimation();
  }

  function startCelebrationAnimation() {
    if (!animationFrame) animationFrame = window.requestAnimationFrame(drawCelebration);
  }

  function drawCelebration() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    confettiPieces = confettiPieces.filter((piece) => piece.y < window.innerHeight + 20);
    confettiPieces.forEach((piece) => {
      piece.y += piece.speed;
      piece.x += piece.drift;
      piece.rotation += piece.spin;
      context.save();
      context.translate(piece.x, piece.y);
      context.rotate(piece.rotation);
      context.fillStyle = piece.color;
      context.fillRect(-piece.width / 2, -piece.height / 2, piece.width, piece.height);
      context.restore();
    });
    fireworkParticles = fireworkParticles.filter((particle) => particle.life > 0);
    fireworkParticles.forEach((particle) => {
      particle.x += particle.velocityX;
      particle.y += particle.velocityY;
      particle.velocityY += particle.gravity;
      particle.life -= 1;
      context.globalAlpha = Math.min(1, particle.life / 20);
      context.fillStyle = particle.color;
      context.beginPath();
      context.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
      context.fill();
    });
    context.globalAlpha = 1;
    if (confettiPieces.length || fireworkParticles.length) {
      animationFrame = window.requestAnimationFrame(drawCelebration);
    } else {
      animationFrame = 0;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }

  // CSS handles the flame animation; the click also launches fireworks and heart rain.
  blowCandlesButton.addEventListener("click", () => {
    if (hasBlownCandles) {
      candleMessage.textContent = "Your wish is already on its way. 💖";
      return;
    }
    hasBlownCandles = true;
    document.querySelector(".candles").classList.add("candles-blown");
    candleMessage.textContent = "Wish made! May your year sparkle as brightly as you do. 🎉";
    blowCandlesButton.innerHTML = "<span>Your wish is on its way!</span><span aria-hidden=\"true\"> 💖</span>";
    blowCandlesButton.disabled = true;
    launchConfetti(180);
    launchFireworks();
    createHeartRain(35);
  });

  function createHeartRain(count) {
    const heartRain = document.getElementById("heartRain");
    for (let index = 0; index < count; index += 1) {
      const heart = document.createElement("span");
      heart.className = "rain-heart";
      heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.fontSize = `${12 + Math.random() * 20}px`;
      heart.style.setProperty("--fall-duration", `${4 + Math.random() * 5}s`);
      heart.style.setProperty("--drift", `${(Math.random() - 0.5) * 130}px`);
      heart.style.animationDelay = `${Math.random() * 1.4}s`;
      heart.addEventListener("animationend", () => heart.remove(), { once: true });
      heartRain.append(heart);
    }
  }

  // Gently reveal heart rain when the finale enters view, only once per visit.
  let hasShownFinale = false;
  const finaleObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting) && !hasShownFinale) {
      hasShownFinale = true;
      createHeartRain(45);
      finaleObserver.disconnect();
    }
  }, { threshold: 0.4 });
  finaleObserver.observe(document.getElementById("finale"));

  document.getElementById("againButton").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("shareButton").addEventListener("click", async () => {
    if (window.location.protocol === "file:") {
      shareMessage.textContent = "Publish this page first, then open the online link here to share it. 💌";
      return;
    }
    const shareData = {
      title: "A birthday surprise for Somya ❤️",
      text: "Someone made a little birthday universe just for you. ✨",
      url: window.location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        shareMessage.textContent = "A little love, on its way. 💌";
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        shareMessage.textContent = "Birthday link copied—send it to Somya! 💌";
      } else {
        shareMessage.textContent = `Copy this birthday link to share: ${shareData.url}`;
      }
    } catch (error) {
      if (error.name === "AbortError") return;
      shareMessage.textContent = "Sharing was unavailable. You can copy the page address from your browser.";
    }
  });
});
