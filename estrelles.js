/* Hiper Casual Games · estrelles.js
 * Inclou aquest fitxer a index.html i, amb una sola línia,
 * a cadascun dels minijocs. Els criteris de cada joc són a GAMES.
 * Les fites no es poden deduir de l'HTML del catàleg:
 * cada minijoc ha de cridar GameStars.report(...) o GameStars.complete().
 */
(function () {
  "use strict";

  const GAMES = [
  {
    "id": "pingpong",
    "file": "pingpong.html",
    "name": "Ping pong",
    "middle": {
      "label": "Guanya 2 partides",
      "metric": "wins",
      "target": 2
    },
    "final": {
      "label": "Guanya 5 partides",
      "metric": "wins",
      "target": 5
    }
  },
  {
    "id": "space",
    "file": "space-invaders.html",
    "name": "Space Invaders",
    "middle": {
      "label": "Arriba a l’onada 3",
      "metric": "wave",
      "target": 3
    },
    "final": {
      "label": "Derrota l’última onada"
    }
  },
  {
    "id": "snake",
    "file": "snake.html",
    "name": "Snake Game",
    "middle": {
      "label": "Menja 15 pomes en una partida",
      "metric": "apples",
      "target": 15
    },
    "final": {
      "label": "Menja 40 pomes en una partida",
      "metric": "apples",
      "target": 40
    }
  },
  {
    "id": "cookie",
    "file": "CookieClicker.html",
    "name": "Cookie Clicker",
    "middle": {
      "label": "Aconsegueix 1.000 galetes",
      "metric": "cookies",
      "target": 1000
    },
    "final": {
      "label": "Aconsegueix 100.000 galetes",
      "metric": "cookies",
      "target": 100000
    }
  },
  {
    "id": "geometry",
    "file": "GeometryX.html",
    "name": "Geometry X",
    "middle": {
      "label": "Completa el nivell 4",
      "metric": "completedLevel",
      "target": 4
    },
    "final": {
      "label": "Completa el nivell 7",
      "metric": "completedLevel",
      "target": 7
    }
  },
  {
    "id": "fishing",
    "file": "fishing.html",
    "name": "Fishing",
    "middle": {
      "label": "Pesca 10 peixos",
      "metric": "fish",
      "target": 10
    },
    "final": {
      "label": "Pesca 40 peixos",
      "metric": "fish",
      "target": 40
    }
  },
  {
    "id": "alchemy",
    "file": "alchemyRNG.html",
    "name": "Alchemy RNG",
    "middle": {
      "label": "Fes 100 tirades",
      "metric": "spins",
      "target": 100
    },
    "final": {
      "label": "Aconsegueix l’aura final (a definir)"
    }
  },
  {
    "id": "tictactoe",
    "file": "TicTacToe.html",
    "name": "Tic Tac Toe",
    "middle": {
      "label": "Guanya 5 partides",
      "metric": "wins",
      "target": 5
    },
    "final": {
      "label": "Guanya 15 partides",
      "metric": "wins",
      "target": 15
    }
  },
  {
    "id": "connect4",
    "file": "QuatreEnRatlla.html",
    "name": "Quatre en Ratlla",
    "middle": {
      "label": "Guanya 5 partides",
      "metric": "wins",
      "target": 5
    },
    "final": {
      "label": "Guanya 15 partides",
      "metric": "wins",
      "target": 15
    }
  },
  {
    "id": "tetris",
    "file": "Tetris.html",
    "name": "Tetris",
    "middle": {
      "label": "Completa 20 línies",
      "metric": "lines",
      "target": 20
    },
    "final": {
      "label": "Completa 80 línies",
      "metric": "lines",
      "target": 80
    }
  },
  {
    "id": "turbo",
    "file": "TurboRoad.html",
    "name": "Turbo Road",
    "middle": {
      "label": "Recorre 2.500 punts de distància",
      "metric": "distance",
      "target": 2500
    },
    "final": {
      "label": "Recorre 10.000 punts de distància",
      "metric": "distance",
      "target": 10000
    }
  },
  {
    "id": "iq",
    "file": "IQtest.html",
    "name": "IQ Test",
    "middle": {
      "label": "Completa el 50% del test",
      "metric": "percent",
      "target": 50
    },
    "final": {
      "label": "Completa el 100% del test",
      "metric": "percent",
      "target": 100
    }
  },
  {
    "id": "mines",
    "file": "buscamines.html",
    "name": "Busca mines",
    "middle": {
      "label": "Guanya en dificultat mitjana",
      "metric": "wonDifficulty",
      "target": 2
    },
    "final": {
      "label": "Guanya en dificultat alta",
      "metric": "wonDifficulty",
      "target": 3
    }
  },
  {
    "id": "pacman",
    "file": "Pac-Man.html",
    "name": "Pac-Man",
    "middle": {
      "label": "Completa el nivell 2",
      "metric": "completedLevel",
      "target": 2
    },
    "final": {
      "label": "Completa el nivell 3",
      "metric": "completedLevel",
      "target": 3
    }
  },
  {
    "id": "blockland",
    "file": "Blockland.html",
    "name": "Block Land",
    "middle": {
      "label": "Col·loca 50 blocs",
      "metric": "blocksPlaced",
      "target": 50
    },
    "final": {
      "label": "Col·loca 200 blocs",
      "metric": "blocksPlaced",
      "target": 200
    }
  },
  {
    "id": "escacs",
    "file": "Escacs.html",
    "name": "Escacs",
    "middle": {
      "label": "Guanya un bot de 1.000 Elo o més",
      "metric": "botEloWon",
      "target": 1000
    },
    "final": {
      "label": "Guanya un bot de 1.800 Elo o més",
      "metric": "botEloWon",
      "target": 1800
    }
  },
  {
    "id": "plantes",
    "file": "PlantesVsRobots.html",
    "name": "Plantes VS Robots",
    "middle": {
      "label": "Completa el nivell 15",
      "metric": "completedLevel",
      "target": 15
    },
    "final": {
      "label": "Completa el nivell 30",
      "metric": "completedLevel",
      "target": 30
    }
  },
  {
    "id": "garden",
    "file": "MyGarden.html",
    "name": "MyGarden",
    "middle": {
      "label": "Fes 20 collites",
      "metric": "harvests",
      "target": 20
    },
    "final": {
      "label": "Fes 100 collites",
      "metric": "harvests",
      "target": 100
    }
  }
];
  const REQUIRED_SECONDS = 15 * 60;
  const KEY_PREFIX = "hipercasual:estrelles:v1:";
  const gamesById = new Map(GAMES.map(g => [g.id, g]));
  const gamesByFile = new Map(GAMES.map(g => [g.file.toLowerCase(), g]));
  const filename = decodeURIComponent(window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  const activeGame = gamesByFile.get(filename) || null;

  function readProgress(id) {
    const blank = { seconds: 0, middle: false, complete: false };
    try {
      const raw = localStorage.getItem(KEY_PREFIX + id);
      if (!raw) return blank;
      const data = JSON.parse(raw);
      return {
        seconds: Math.max(0, Number(data.seconds) || 0),
        middle: Boolean(data.middle),
        complete: Boolean(data.complete)
      };
    } catch (e) {
      return blank; // Si localStorage està bloquejat, continua sense desar.
    }
  }

  function writeProgress(id, changes) {
    if (!gamesById.has(id)) return;
    const before = readProgress(id);
    const next = {
      seconds: Math.max(before.seconds, Number(changes.seconds) || 0),
      middle: before.middle || Boolean(changes.middle) || Boolean(changes.complete),
      complete: before.complete || Boolean(changes.complete)
    };
    try { localStorage.setItem(KEY_PREFIX + id, JSON.stringify(next)); } catch (e) { /* opcional */ }
    renderCatalog();
    window.dispatchEvent(new CustomEvent("gamestars:updated", { detail: { id, progress: next } }));
  }

  function starsFor(id) {
    const state = readProgress(id);
    // Les fites superiors desbloquegen les estrelles inferiors.
    if (state.complete) return 3;
    if (state.middle) return 2;
    if (state.seconds >= REQUIRED_SECONDS) return 1;
    return 0;
  }

  function formatTime(seconds) {
    const clamped = Math.min(REQUIRED_SECONDS, Math.floor(seconds));
    return Math.floor(clamped / 60) + ":" + String(clamped % 60).padStart(2, "0");
  }

  function renderCatalog() {
    // No es modifica el disseny de la pàgina: només els tres símbols d'estrella.
    for (const game of GAMES) {
      const card = document.querySelector('.card[data-game="' + game.id + '"]');
      if (!card) continue;
      const stars = starsFor(game.id);
      const state = readProgress(game.id);
      const container = card.querySelector('.game-stars');
      if (!container) continue;
      container.replaceChildren();
      for (let n = 1; n <= 3; n++) {
        const star = document.createElement('span');
        star.textContent = n <= stars ? '★' : '☆';
        if (n <= stars) star.className = 'earned';
        star.setAttribute('aria-hidden', 'true');
        container.appendChild(star);
      }
      container.setAttribute('aria-label', stars + ' de 3 estrelles');
      container.title = '★ 15 minuts de joc (' + formatTime(state.seconds) + '/15:00)'
        + '\n★★ ' + game.middle.label + (stars >= 2 ? ' ✓' : '')
        + '\n★★★ ' + game.final.label + (stars >= 3 ? ' ✓' : '');
    }
  }

  function report(statistics) {
    if (!activeGame || !statistics || typeof statistics !== "object") return;
    const matching = goal => goal.metric && Number.isFinite(Number(statistics[goal.metric]))
      && Number(statistics[goal.metric]) >= goal.target;
    const completed = matching(activeGame.final);
    const middle = completed || matching(activeGame.middle);
    if (middle || completed) writeProgress(activeGame.id, { middle, complete: completed });
  }

  function intermediate() {
    if (activeGame) writeProgress(activeGame.id, { middle: true });
  }

  function complete() {
    if (activeGame) writeProgress(activeGame.id, { complete: true });
  }

  // Comptador de temps acumulat. El temps només s'afegeix quan:
  // (1) el minijoc és la pestanya activa, (2) s'ha començat a interactuar,
  // (3) hi ha hagut activitat durant els últims 90 segons.
  let playing = false;
  let manualControl = false;
  let lastInteraction = 0;
  let lastTick = Date.now();
  let pendingSeconds = 0;

  function flushSeconds(force) {
    // Desar només cada 5 segons redueix les escriptures a localStorage.
    if (!activeGame || pendingSeconds < (force ? 1 : 5)) return;
    const whole = Math.floor(pendingSeconds);
    pendingSeconds -= whole;
    const current = readProgress(activeGame.id);
    writeProgress(activeGame.id, { seconds: current.seconds + whole });
  }

  function tick(forceFlush = false) {
    const now = Date.now();
    const elapsed = Math.max(0, Math.min(5, (now - lastTick) / 1000));
    lastTick = now;
    if (activeGame && playing && document.visibilityState === "visible"
        && document.hasFocus() && now - lastInteraction <= 90 * 1000) {
      pendingSeconds += elapsed;
    }
    flushSeconds(forceFlush);
  }

  function activity(startByUser) {
    if (!activeGame) return;
    lastInteraction = Date.now();
    if (startByUser && !manualControl) playing = true;
  }

  function start() {
    tick();
    manualControl = true;
    playing = true;
    lastInteraction = Date.now();
  }
  function pause() {
    tick(true);
    manualControl = true;
    playing = false;
  }

  // API global que es pot cridar directament des dels minijocs.
  window.GameStars = {
    games: GAMES,
    currentGame: activeGame?.id || null,
    get: readProgress,
    stars: starsFor,
    report,
    intermediate,
    complete,
    start,
    pause,
    refresh: renderCatalog
  };

  if (activeGame) {
    document.addEventListener("keydown", () => activity(true), { passive: true });
    document.addEventListener("pointerdown", () => activity(true), { passive: true });
    document.addEventListener("touchstart", () => activity(true), { passive: true });
    document.addEventListener("pointermove", () => { if (playing) activity(false); }, { passive: true });
    document.addEventListener("click", () => activity(true), { passive: true });
    window.setInterval(tick, 1000);
    window.addEventListener("pagehide", () => tick(true));
    window.addEventListener("blur", () => tick(true));
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") tick(true);
    });
  } else {
    document.addEventListener("DOMContentLoaded", renderCatalog);
    window.addEventListener("pageshow", renderCatalog);
    window.addEventListener("focus", renderCatalog);
    window.addEventListener("storage", event => {
      if (event.key && event.key.startsWith(KEY_PREFIX)) renderCatalog();
    });
  }
})();
