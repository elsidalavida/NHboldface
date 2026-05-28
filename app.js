const emergencies = [
  {
    title: "EMERGENCY ENGINE SHUTDOWN",
    steps: [
      { type: "step", text: "ENG SIF .............................................. STOP" },
      { type: "step", text: "ENG SOV .............................................. CLOSE" },
      { type: "step", text: "Fuel Pumps ........................................ Off" }
    ]
  },
  {
    title: "EMERGENCY ROTOR BRAKING",
    steps: [
      { type: "step", text: "Both ENG SIF ........................................ STOP" },
      { type: "step", text: "CALIPER .............................................. READY" },
      { type: "step", text: "MCO .................................................. Pull" },
      { type: "step", text: "RTRBK ................................................ BRK" }
    ]
  },
  {
    title: "EMERGENCY EGRESS",
    steps: [
      { type: "warning", text: "Beware of turning rotors." },
      { type: "caution", text: "In case of emergency landing or ditching, do not jettison doors and emergency exits before touchdown to prevent possible impact with the rotors." },
      { type: "caution", text: "Do not inflate life jackets until clear of aircraft." },
      { type: "step", text: "Foldable cabin side ballistic protection panel (if installed and not obstructed) .................... Unlock, Open" },
      { type: "step", text: "Doors/Emergency exit .................... Open/Jettison" },

      { type: "header", text: "Cockpit doors, from inside/outside the aircraft" },
      { type: "substep", text: "a.   Door jettison handle .................... Actuate downward" },
      { type: "substep", text: "b.   Door .................................... Push (pull) outward & forward" },

      { type: "header", text: "Sliding doors windows" },
      { type: "substep", text: "c.   Seal-retaining strip .................... Pull out" },
      { type: "substep", text: "d.   Windows .................................... Push out" },

      { type: "header", text: "Sliding Doors from inside/outside" },
      { type: "substep", text: "e.   Jettison handle cover.................... Open" },
      { type: "substep", text: "f.   Jettison handle............................ Actuate" },
      { type: "substep", text: "g.   Door .................................... Push (pull) out" },
      { type: "header", text: "Rear Hatch emergency exit" },
      { type: "substep", text: "h.   Seal-retaining strip .................................... Pull out" },
      { type: "substep", text: "i.   Exit cover .................................... Push out (at marked point)" },
      { type: "step", text: "Headset/HMSD (if fitted) cords .................... Disconnect" },
      { type: "header", text: "When rotors stopped" },
      { type: "step", text: "Safety belts .................................... Unfasten" }
    ]
  },
  {
    title: "EMERGENCY LANDING CHECKS",
    steps: [
      { type: "step", text: "LDG GEAR ........................................... Down" },
      { type: "step", text: "NWL .................................................. Lock" },
      { type: "step", text: "PKGBK .................................................. As req" },
      { type: "condition", text: "IF ditching:" },
      { type: "step", text: "LDG GEAR ........................................... As req" }
    ]
  },
  {
    title: "AUTOROTATION",
    steps: [
      { type: "caution", text: "At heavy weight or high density altitude land with speed not less than 40 KIAS if landing site condition permits." },

      { type: "step", text: "Autorotation .................................... Engage" },
      { type: "substep", text: "a. Collective .................................... 88% ≤ NR ≤ 110%" },
      { type: "substep", text: "b. Airspeed .................................... Adjust" },

      { type: "condition", text: "IF time permits" },
      { type: "substep", text: "c. Engine in flight relight .................... Perform as req" },

      { type: "condition", text: "ELSE no time for Engine in flight relight" },
      { type: "step", text: "c. Emergency landing checks ............ Perform" },

      { type: "step", text: "Autorotation Landing .................................... Perform" },
      { type: "header", text: "At about 150ft AGL" },
      { type: "substep", text: "a. Flare .................................... 15 to 20° nose up" },
      { type: "substep", text: "b. Collective .................................... Control NR" },
      { type: "substep", text: "c. Approaching surface .................... ≤ 10° nose up" },
      { type: "substep", text: "d. Collective pitch ............................ Cushion touchdown" },
      { type: "header", text: "On ground" },
      { type: "substep", text: "e. Collective .................................... Gently reduce" },
      { type: "substep", text: "f. W/B .................................... Apply" },

      { type: "step", text: "Emergency Rotor Braking .................... Perform" }
    ]
  },
  {
    title: "LOSS OF TAIL ROTOR THRUST",
    steps: [
      { type: "condition", text: "CASE In Hover:" },
      { type: "step", text: "Collective ........................................ Reduce immediately" },
      { type: "step", text: "Cushion touchdown" },
      { type: "step", text: "Emergency ENG shutdown (Both ENG) .... Perform" },
      { type: "condition", text: "CASE In Cruise:" },
      { type: "step", text: "Collective ........................................ Reduce to minimize sideslip" },
      { type: "step", text: "Cyclic ........................................ Adjust to Vy / Control yaw" }
    ]
  },
  {
    title: "FIRE ENGINE 1 OR 2",
    warnings: [
      { location: "MAP", indication: "WARN", color: "red" },
      { location: "Audio Warning", indication: "Fire engine 1 (or 2), Fire", color: "neutral" },
      { location: "CWP", indication: "FIRE 1 or FIRE 2", color: "red" },
      { location: "VMD", indication: "FIRE", color: "red" },
      { location: "CP", indication: "1 or 2 and FIRE FIRE", color: "red" }
    ],
    steps: [
      { type: "condition", text: "On Ground:" },
      { type: "step", text: "Emergency Rotor Braking .................... Perform" },
      { type: "step", text: "Affected ENG .................... Identify" },
      { type: "step", text: "FIRE EXTG ........................................ As req: Press and release immediately" },
      { type: "step", text: "EMERG Egress ........................................ As req" },
      { type: "condition", text: "In Flight:" },
      { type: "step", text: "Safe OEI flight .................................... Establish ASAP" },
      { type: "step", text: "Affected ENG .................................... Identify/Confirm" },
      { type: "step", text: "ENG SIF .............................................. IDLE" },
      { type: "step", text: "NR .............................................. Check" },
      { type: "step", text: "Persistence of fire .............................................. Confirm if possible" },
      { type: "condition", text: "IF FIRE confirmed or doubtful:" },
      { type: "step", text: "ENG SIF .............................................. STOP" },
      { type: "step", text: "ENG SOV .............................................. CLOSE" },
      { type: "step", text: "ENG Fuel pumps .................................. Off" },
      { type: "step", text: "FIRE EXTG 1st shot .............................. Press and release immediately" }
    ]
  },
  {
    title: "FIRE IN MGB COMPARTMENT",
    warnings: [
      { location: "MAP", indication: "WARN", color: "red" },
      { location: "Audio Warning", indication: "Audio chime" },
      { location: "CWP", indication: "BFIR 1 or BFIR 2", color: "red" },
      { location: "VMD", indication: "1BFIR or BFIR2", color: "red" },
	{ location: "MAP", indication: "WARN", color: "red" },
      { location: "Audio Warning", indication: "Audio chime" },
      { location: "CWP", indication: "BFIR 1 and BFIR 2", color: "red" },
      { location: "VMD", indication: "BFIRE", color: "red" }
    ],
    steps: [
      { type: "header", text: "On Ground" },
      { type: "step", text: "Emergency Rotor Braking .................... Perform" },
      { type: "header", text: "In Flight" },
      { type: "condition", text: "IF BFIR1 and BFIR2 on" },
      { type: "caution", text: "Even if LDG GEAR extended, select LDG GEAR EMERG sw to DOWN." },
      { type: "step", text: "Emergency landing checks .............. Perform" },
      { type: "step", text: "LDG GEAR EMERG extension ............ Perform" },
      { type: "step", text: "LAND (OR DITCH) IMMEDIATELY" },
      { type: "condition", text: "ELSE BFIR1 or BFIR2 on" },
      { type: "step", text: "FIRE EXTG .............. Test" },
      {type: "condition", text: "IF Fire Test NOT correct (only one BFIR warning on) and IF abnormal MGB Oil Temp fast increases and/or IF signs of fire/smoke" },
      { type: "caution", text: "Even if LDG GEAR extended, select LDG GEAR EMERG sw to DOWN." },
      { type: "step", text: "Emergency landing checks .............. Perform" },
      { type: "step", text: "LDG GEAR EMERG extension ............ Perform" },
      { type: "step", text: "LAND (OR DITCH) IMMEDIATELY" }
    ]
  },
  {
    title: "FIRE IN APU BAY",
    steps: [
      { type: "step", text: "Left to Right Manual XFER .................... Perform" },
      { type: "step", text: "Emergency Rotor Braking .................... As req" }
    ]
  },
  {
    title: "FIRE/SMOKE IN COCKPIT OR CABIN",
    steps: [
      { type: "condition", text: "On Ground" },
      { type: "step", text: "Cockpit windows ............................ Open" },
      { type: "step", text: "ECS ........................................... OFF" },

      { type: "condition", text: "In Flight" },
      { type: "step", text: "Level flight at Vy ............................ Establish" },
      { type: "step", text: "Doors/Windows .............................. Open as req" },
      { type: "step", text: "ECS ........................................... OFF" }
    ]
  },
  {
    title: "POWER OFF DITCHING",
    steps: [
      { type: "warning", text: "In case the Emergency Floatation System is not installed:" },
      { type: "warning", text: "- Ramp and Hatch must be closed before ditching." },
      { type: "warning", text:"- H/C may capsize after impact on water." },
      { type: "step", text: "Autorotation ........................................ Engage" }
    ]
  },
  {
    title: "SINGLE ENGINE FAILURE IN FORWARD FLIGHT",
    steps: [
      { type: "step", text: "NR .................................................. ≥90% (use NR tachometer)" },
      { type: "step", text: "External stores .................................... Jettison as req" },
      { type: "step", text: "Landing or Cont'd flight  .................................... Decide" }
    ]
  },
  {
    title: "SINGLE ENGINE FAILURE IN HOVER (IGE)",
    steps: [
      { type: "step", text: "Collective pitch ........................................ Maintain" },
      { type: "step", text: "FLOAT (if installed) .................................... Inflate as req" }
    ]
  },
  {
    title: "SINGLE ENGINE FAILURE IN HOVER (OGE)",
    steps: [
      { type: "caution", text: "FLI indication shall not be relied upon until positive ROC is established." },
      { type: "step", text: "Cyclic longitudinal ................................ Set for Nose down 20°(<=1 s)" },
      { type: "step", text: "External stores .................................... Jettison as req" },
      { type: "step", text: "NR .................................................. 90% (use NR tachometer)" },
      { type: "header", text: "Once −20° is reached" },
      { type: "step", text: "Attitude .................. Maintain for 2 s (or more if H/C height permits)" },
      { type: "step", text: "Landing / Ditching or Fly-Away .................. Decide" }
    ]
  },
  {
    title: "MAB VENTILATION FAILURE (BAY V)",
    warnings: [
      { location: "MAP", indication: "WARN", color: "red" },
      { location: "Audio Warning", indication: "Audio chime" },
      { location: "CWP", indication: "BAY1V and/or BAY2V", color: "red" },
      { location: "VMD", indication: "BAY VENT L and/or BAY VENT R", color: "neutral" },
      { location: "CP", indication: "1 and/or 2", color: "red" }
    ],
    steps: [
      { type: "condition", text: "IF both MAB ventilation failure" },
      { type: "warning", text: "Land or ditch within 30 min after warning appearance." },
      { type: "step", text: "ALT1 and 2 .................................... Check" },
      { type: "condition", text: "IF at least one ALT OK:" },
      { type: "step", text: "Both TRU .................................... Off" }
    ]
  },
  {
    title: "MGB LOW OIL PRESSURE (MGBP)",
    warnings: [
      { location: "MAP", indication: "WARN", color: "red" },
      { location: "Audio Warning", indication: "Chime tone", color: "neutral" },
      { location: "CWP", indication: "MGBP", color: "red" },
      { location: "VMD", indication: "PRESS", color: "red" },
      { location: "CP", indication: "-", color: "neutral" }
    ],
    steps: [
      { type: "caution", text: "Chip Burner shall not be activated." },
      { type: "step", text: "VMD MGB Oil Press ............................ Check" }
    ]
  },
  {
    title: "BAT1 AND/OR 2 HIGH TEMPERATURE (BAT T)",
    warnings: [
      { location: "MAP", indication: "WARN", color: "red" },
      { location: "Audio Warning", indication: "-", color: "neutral" },
      { location: "CWP", indication: "BAT1T and/or BAT2T", color: "red" },
      { location: "VMD", indication: "BAT1 T and/or BAT2 T", color: "red" },
      { location: "CP", indication: "-", color: "neutral" }
    ],
    steps: [
      { type: "step", text: "Affected BAT sw .................................... OFF" },
      { type: "condition", text: "IF BAT1 affected" },
      { type: "substep", text: "a.  Cockpit ECS .................................... OFF" }
    ]
  },
  {
    title: "ROTOR BRAKE CAUTION (RTRBK)",
    warnings: [
      { location: "MAP", indication: "CAUTION", color: "amber" },
      { location: "Audio Warning", indication: "-", color: "neutral" },
      { location: "CWP", indication: "RTRBK", color: "amber" },
      { location: "VMD", indication: "-", color: "neutral" },
      { location: "CP", indication: "-", color: "neutral" }
    ],
    steps: [
      { type: "condition", text: "On Ground" },
      { type: "step", text: "Both ENG SIF .................................... STOP" },

      { type: "condition", text: "In Flight" },
      { type: "step", text: "RTRBK sw .................................... Check FLIGHT" },
      { type: "step", text: "CALIPER sw .................................... STOW" }
    ]
  },
  {
    title: "ENGINE GOVERNOR FAILURE (GOV)",
    warnings: [
      { location: "MAP", indication: "WARN", color: "red" },
      { location: "Audio Warning", indication: "Chime tone", color: "neutral" },
      { location: "CWP", indication: "GOV 1 or GOV 2", color: "amber" },
      { location: "VMD", indication: "GOV", color: "amber" },
      { location: "CP", indication: "1 or 2", color: "red" }
    ],
    steps: [
      { type: "step", text: "NR .................................................... Control" },
      { type: "step", text: "AFCS collective mode ............................ Disengage" }
    ]
  }
];

let currentEmergency = null;
let visibleSteps = 0;

// ====================== FUNCIONES (mantengo las mismas) ======================
function newEmergency() {
  currentEmergency = emergencies[Math.floor(Math.random() * emergencies.length)];
  visibleSteps = 0;
  updateUI();
}

function nextStep() {
  if (!currentEmergency) return;
  if (visibleSteps < currentEmergency.steps.length) visibleSteps++;
  updateUI();
}

function prevStep() {
  if (!currentEmergency) return;
  if (visibleSteps > 0) visibleSteps--;
  updateUI();
}

function showAllSteps() {
  if (!currentEmergency) return;
  visibleSteps = currentEmergency.steps.length;
  updateUI();
}

function hideAllSteps() {
  if (!currentEmergency) return;
  visibleSteps = 0;
  updateUI();
}

function updateUI() {
  if (!currentEmergency) {
    document.getElementById("title").innerText = "Pulsa SIGUIENTE";
    document.getElementById("step").innerHTML = "";
    return;
  }

  document.getElementById("title").innerText = currentEmergency.title;
  const stepDiv = document.getElementById("step");
  let html = "";
  let stepCounter = 0;

  // Tabla de avisos (si existe)
  if (currentEmergency.warnings && currentEmergency.warnings.length > 0) {
    html += `<table class="aviso-table">
      <tr><th>Location</th><th>Indication</th></tr>`;
    currentEmergency.warnings.forEach(w => {
      html += `<tr>
        <td>${w.location}</td>
        <td><span class="${w.color}">${w.indication}</span></td>
      </tr>`;
    });
    html += `</table>`;
  }

  // Renderizado inteligente de pasos
  currentEmergency.steps.slice(0, visibleSteps).forEach(item => {
    if (item.type === "step") {
      stepCounter++;
      html += `${stepCounter}. ${item.text}<br>`;
    } 
    else if (item.type === "substep") {
      html += `&nbsp;&nbsp;&nbsp;&nbsp;${item.text}<br>`;
    } 
    else if (item.type === "header") {
      html += `${item.text}<br>`;
    } 
    else if (item.type === "warning") {
      html += `<span class="warning">${item.text}</span><br>`;
    } 
    else if (item.type === "caution") {
      html += `<span class="caution">${item.text}</span><br>`;
    } 
    else if (item.type === "condition") {
      html += `<span class="condition">${item.text}</span><br>`;
    }
  });

  stepDiv.innerHTML = html;
}

// ====================== MENÚ ======================
function renderEmergencyList(filtered) {
  const list = document.getElementById("emergencyList");
  list.innerHTML = "";

  filtered.forEach((emerg, idx) => {
    const item = document.createElement("div");
    item.className = "emergency-item";
    item.textContent = emerg.title;
    item.onclick = () => {
      currentEmergency = emergencies[idx];
      visibleSteps = 0;
      updateUI();
      closeMenu();
    };
    list.appendChild(item);
  });
}

function openMenu() {
  document.getElementById("menuScreen").classList.remove("hidden");
  renderEmergencyList(emergencies);

  const search = document.getElementById("searchInput");
  search.focus();
  search.oninput = () => {
    const term = search.value.toLowerCase();
    const filtered = emergencies.filter(e => e.title.toLowerCase().includes(term));
    renderEmergencyList(filtered);
  };
}

function closeMenu() {
  document.getElementById("menuScreen").classList.add("hidden");
}

// ====================== INICIO ======================
document.addEventListener("DOMContentLoaded", () => {
  newEmergency();

  document.getElementById("newBtn").addEventListener("click", newEmergency);
  document.getElementById("nextStepBtn").addEventListener("click", nextStep);
  document.getElementById("prevBtn").addEventListener("click", prevStep);

  const showBtn = document.getElementById("showBtn");
  showBtn.addEventListener("mousedown", showAllSteps);
  showBtn.addEventListener("mouseup", hideAllSteps);
  showBtn.addEventListener("mouseleave", hideAllSteps);
  showBtn.addEventListener("touchstart", (e) => { e.preventDefault(); showAllSteps(); });
  showBtn.addEventListener("touchend", hideAllSteps);

  document.getElementById("menuBtn").addEventListener("click", openMenu);
  document.getElementById("closeMenuBtn").addEventListener("click", closeMenu);
});