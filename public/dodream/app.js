const STORAGE_KEY = "dodreamMoneyNote.records.v1";
const CALENDAR_STORAGE_KEY = "dodreamMoneyNote.calendarIncome.v1";
const CALENDAR_SEED_VERSION_KEY = "dodreamMoneyNote.calendarSeed.v20260629";

const categories = {
  income: [
    "여성인력개발센터",
    "두정평생학습관",
    "성환초등학교",
    "월봉초등학교",
    "특강",
    "콘텐츠 수익",
    "기타 수입",
  ],
  expense: [
    "AI 구독료",
    "교재/재료비",
    "교통비",
    "식비",
    "홍보비",
    "사무용품",
    "기타 지출",
  ],
  investment: [
    "강의 장비",
    "교육 수강",
    "콘텐츠 제작",
    "광고/홍보",
    "브랜드 구축",
    "기타 투자",
  ],
};

const templates = {
  income: [
    { category: "여성인력개발센터", title: "여성인력개발센터 생성형AI 강의" },
    { category: "두정평생학습관", title: "두정평생학습관 생성형AI 강의" },
    { category: "성환초등학교", title: "성환초등학교 방과후 컴퓨터 수업" },
    { category: "월봉초등학교", title: "월봉초등학교 방과후 컴퓨터 수업" },
    { category: "특강", title: "생성형AI 특강" },
  ],
  expense: [
    { category: "AI 구독료", title: "ChatGPT 구독료", scope: "business" },
    { category: "교통비", title: "강의 이동 교통비", scope: "business" },
    { category: "교재/재료비", title: "수업 교재/재료비", scope: "business" },
    { category: "식비", title: "개인 식비", scope: "personal" },
  ],
  investment: [
    { category: "강의 장비", title: "강의 장비 구입", scope: "business" },
    { category: "교육 수강", title: "AI 교육 수강료", scope: "business" },
    { category: "콘텐츠 제작", title: "콘텐츠 제작 비용", scope: "business" },
    { category: "브랜드 구축", title: "두드림AI 브랜드 작업", scope: "business" },
  ],
};

const calendarSeedEvents = [
  ...makeSeedEvents("성환초방과후", "성환초등학교", [
    "2026-06-01", "2026-06-05", "2026-06-08", "2026-06-12", "2026-06-15",
    "2026-06-19", "2026-06-22", "2026-06-26", "2026-06-29", "2026-07-03",
    "2026-07-06", "2026-07-10", "2026-07-13", "2026-07-20", "2026-07-24",
    "2026-07-27", "2026-08-24", "2026-08-28", "2026-08-31", "2026-09-04",
    "2026-09-07", "2026-09-11", "2026-09-14", "2026-09-18", "2026-09-21",
    "2026-09-25", "2026-09-28", "2026-10-02", "2026-10-05", "2026-10-09",
    "2026-10-12", "2026-10-16", "2026-10-19", "2026-10-23", "2026-10-26",
    "2026-10-30", "2026-11-02", "2026-11-06", "2026-11-09", "2026-11-13",
    "2026-11-16", "2026-11-20", "2026-11-23", "2026-11-27", "2026-11-30",
    "2026-12-04", "2026-12-07", "2026-12-11", "2026-12-14", "2026-12-18",
    "2026-12-21", "2026-12-25", "2026-12-28",
  ], "13:00", "15:30"),
  ...makeSeedEvents("월봉초방과후", "월봉초등학교", [
    "2026-06-10", "2026-06-17", "2026-06-24", "2026-07-01", "2026-07-08",
    "2026-07-15", "2026-07-22", "2026-09-16", "2026-09-23", "2026-09-30",
  ], "14:00", "15:20"),
  ...makeSeedEvents("ChatGPT 활용 글짓기", "두정평생학습관", [
    "2026-06-05", "2026-06-12", "2026-06-19", "2026-06-26", "2026-07-03",
    "2026-08-10", "2026-08-24", "2026-08-31", "2026-09-07", "2026-09-14",
    "2026-09-21", "2026-09-28", "2026-10-05", "2026-10-12", "2026-10-19",
    "2026-10-26", "2026-11-02", "2026-11-09", "2026-11-20", "2026-11-27",
  ], "10:00", "12:00"),
  ...makeSeedEvents("콘텐츠수업", "콘텐츠 수익", [
    "2026-06-01", "2026-06-08", "2026-06-15", "2026-06-22", "2026-06-29",
    "2026-07-06", "2026-07-13", "2026-07-20", "2026-07-27", "2026-08-03",
    "2026-08-10", "2026-08-17", "2026-08-24", "2026-08-31", "2026-09-07",
    "2026-09-14", "2026-09-21", "2026-09-28", "2026-10-05", "2026-10-12",
    "2026-10-19", "2026-10-26", "2026-11-02", "2026-11-09", "2026-11-16",
    "2026-11-23", "2026-11-30",
  ], "20:00", "21:30"),
  ...makeSeedEvents("아청문 CDT", "특강", [
    "2026-09-03", "2026-09-10", "2026-09-17", "2026-09-24", "2026-10-01",
    "2026-10-08", "2026-10-15", "2026-10-22", "2026-10-29", "2026-11-05",
    "2026-11-12", "2026-11-19",
  ], "17:30", "19:30"),
  { title: "다문화센터_이미지만들기강의", category: "특강", date: "2026-06-16", startTime: "09:30", endTime: "13:00" },
  { title: "다문화센터_블로그 강의", category: "특강", date: "2026-06-18", startTime: "10:00", endTime: "13:00" },
  { title: "석성중학교 18명_알티노", category: "특강", date: "2026-07-07", startTime: "13:30", endTime: "16:00" },
  { title: "부여AI센터교구교육", category: "특강", date: "2026-06-30", startTime: "14:00", endTime: "17:30" },
  { title: "코딩 교육 수업_천안시청소년복합커뮤니티센터", category: "특강", date: "2026-08-07", startTime: "13:00", endTime: "15:00" },
  { title: "코딩 교육 수업_천안시청소년복합커뮤니티센터", category: "특강", date: "2026-08-08", startTime: "13:00", endTime: "15:00" },
];

const state = {
  records: loadRecords(),
  calendarItems: loadCalendarItems(),
  type: "income",
  month: toMonth(new Date()),
  filter: "all",
};

const els = {
  todayLabel: document.getElementById("todayLabel"),
  monthTitle: document.getElementById("monthTitle"),
  monthInput: document.getElementById("monthInput"),
  prevMonthBtn: document.getElementById("prevMonthBtn"),
  nextMonthBtn: document.getElementById("nextMonthBtn"),
  receivedIncome: document.getElementById("receivedIncome"),
  pendingIncome: document.getElementById("pendingIncome"),
  businessExpense: document.getElementById("businessExpense"),
  personalExpense: document.getElementById("personalExpense"),
  investmentTotal: document.getElementById("investmentTotal"),
  cashLeft: document.getElementById("cashLeft"),
  calendarMonthTotal: document.getElementById("calendarMonthTotal"),
  calendarPaidTotal: document.getElementById("calendarPaidTotal"),
  calendarUnpaidTotal: document.getElementById("calendarUnpaidTotal"),
  calendarIncomeCount: document.getElementById("calendarIncomeCount"),
  calendarIncomeList: document.getElementById("calendarIncomeList"),
  importCalendarBtn: document.getElementById("importCalendarBtn"),
  clearCalendarMonthBtn: document.getElementById("clearCalendarMonthBtn"),
  typeButtons: document.querySelectorAll("[data-type]"),
  filterButtons: document.querySelectorAll("[data-filter]"),
  templateRow: document.getElementById("templateRow"),
  recordForm: document.getElementById("recordForm"),
  recordId: document.getElementById("recordId"),
  lectureDate: document.getElementById("lectureDate"),
  paymentDate: document.getElementById("paymentDate"),
  paymentDateLabel: document.getElementById("paymentDateLabel"),
  recordDate: document.getElementById("recordDate"),
  standardDateRow: document.querySelector(".standard-date-row"),
  amount: document.getElementById("amount"),
  category: document.getElementById("category"),
  title: document.getElementById("title"),
  titleLabel: document.getElementById("titleLabel"),
  incomeStatus: document.getElementById("incomeStatus"),
  sessionCount: document.getElementById("sessionCount"),
  scope: document.getElementById("scope"),
  memo: document.getElementById("memo"),
  incomeFields: document.querySelectorAll(".income-fields"),
  saveRecordBtn: document.getElementById("saveRecordBtn"),
  resetFormBtn: document.getElementById("resetFormBtn"),
  cancelEditBtn: document.getElementById("cancelEditBtn"),
  pendingList: document.getElementById("pendingList"),
  pendingCount: document.getElementById("pendingCount"),
  lessonIncomeList: document.getElementById("lessonIncomeList"),
  lessonIncomeCount: document.getElementById("lessonIncomeCount"),
  incomeBars: document.getElementById("incomeBars"),
  outgoingBars: document.getElementById("outgoingBars"),
  recordsList: document.getElementById("recordsList"),
  exportJsonBtn: document.getElementById("exportJsonBtn"),
  importJsonBtn: document.getElementById("importJsonBtn"),
  importFile: document.getElementById("importFile"),
  exportCsvBtn: document.getElementById("exportCsvBtn"),
  toast: document.getElementById("toast"),
};

init();

function init() {
  const today = new Date();
  els.todayLabel.textContent = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
  }).format(today);
  els.monthInput.value = state.month;
  setDefaults();
  bindEvents();
  updateTypeUI();
  autoImportSeedEvents();
  renderAll();
}

function bindEvents() {
  els.prevMonthBtn.addEventListener("click", () => shiftMonth(-1));
  els.nextMonthBtn.addEventListener("click", () => shiftMonth(1));
  els.monthInput.addEventListener("change", () => {
    state.month = els.monthInput.value || toMonth(new Date());
    renderAll();
  });
  els.importCalendarBtn.addEventListener("click", () => {
    const added = mergeSeedEvents();
    persistCalendarItems();
    renderAll();
    showToast(added ? `${added}개 일정을 가져왔습니다.` : "새로 가져올 일정이 없습니다.");
  });
  els.clearCalendarMonthBtn.addEventListener("click", clearCalendarMonth);
  els.calendarIncomeList.addEventListener("input", updateCalendarAmount);
  els.calendarIncomeList.addEventListener("change", updateCalendarPaid);

  els.typeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.type = button.dataset.type;
      clearForm(false);
      updateTypeUI();
    });
  });

  els.filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      els.filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      renderRecords();
    });
  });

  els.incomeStatus.addEventListener("change", updateIncomeStatusLabel);
  els.recordForm.addEventListener("submit", saveRecord);
  els.resetFormBtn.addEventListener("click", () => clearForm(true));
  els.cancelEditBtn.addEventListener("click", () => clearForm(true));
  els.exportJsonBtn.addEventListener("click", exportJson);
  els.importJsonBtn.addEventListener("click", () => els.importFile.click());
  els.importFile.addEventListener("change", importJson);
  els.exportCsvBtn.addEventListener("click", exportCsv);
}

function setDefaults() {
  const today = toDateInput(new Date());
  els.lectureDate.value = today;
  els.paymentDate.value = today;
  els.recordDate.value = today;
  els.sessionCount.value = "1";
}

function updateTypeUI() {
  els.typeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.type === state.type);
  });

  const isIncome = state.type === "income";
  els.incomeFields.forEach((field) => {
    field.hidden = !isIncome;
  });
  els.standardDateRow.hidden = isIncome;
  els.scope.closest("label").hidden = isIncome;
  els.titleLabel.textContent = isIncome ? "기관/강의명" : "사용 내용";
  els.title.placeholder = isIncome
    ? "예: 여성인력개발센터 ChatGPT 특강"
    : "예: 강의 이동 교통비";

  renderCategoryOptions();
  renderTemplates();
  updateIncomeStatusLabel();
}

function renderCategoryOptions() {
  els.category.innerHTML = categories[state.type]
    .map((category) => `<option value="${escapeAttr(category)}">${escapeHtml(category)}</option>`)
    .join("");
}

function renderTemplates() {
  els.templateRow.innerHTML = templates[state.type]
    .map((template, index) => {
      return `<button class="template-button" type="button" data-template-index="${index}">${escapeHtml(template.category)}</button>`;
    })
    .join("");

  els.templateRow.querySelectorAll("[data-template-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const template = templates[state.type][Number(button.dataset.templateIndex)];
      els.category.value = template.category;
      els.title.value = template.title;
      if (template.scope) els.scope.value = template.scope;
      if (state.type === "income" && !els.amount.value) els.sessionCount.value = "1";
    });
  });
}

function updateIncomeStatusLabel() {
  const isPending = els.incomeStatus.value === "pending";
  els.paymentDateLabel.textContent = isPending ? "예상 입금일" : "입금일";
}

function saveRecord(event) {
  event.preventDefault();
  const amount = Number(els.amount.value);
  if (!Number.isFinite(amount) || amount <= 0) {
    showToast("금액을 입력해 주세요.");
    els.amount.focus();
    return;
  }

  const title = els.title.value.trim();
  if (!title) {
    showToast("기관명이나 사용 내용을 입력해 주세요.");
    els.title.focus();
    return;
  }

  const now = new Date().toISOString();
  const id = els.recordId.value || makeId();
  const previous = state.records.find((record) => record.id === id);
  let record;

  if (state.type === "income") {
    if (!els.lectureDate.value || !els.paymentDate.value) {
      showToast("강의일과 입금일을 확인해 주세요.");
      return;
    }
    record = {
      id,
      type: "income",
      title,
      category: els.category.value,
      amount,
      lectureDate: els.lectureDate.value,
      paymentDate: els.paymentDate.value,
      status: els.incomeStatus.value,
      sessionCount: Number(els.sessionCount.value) || 1,
      memo: els.memo.value.trim(),
      createdAt: previous?.createdAt || now,
      updatedAt: now,
    };
  } else {
    if (!els.recordDate.value) {
      showToast("사용일을 입력해 주세요.");
      return;
    }
    record = {
      id,
      type: state.type,
      title,
      category: els.category.value,
      amount,
      date: els.recordDate.value,
      scope: els.scope.value,
      memo: els.memo.value.trim(),
      createdAt: previous?.createdAt || now,
      updatedAt: now,
    };
  }

  state.records = previous
    ? state.records.map((item) => (item.id === id ? record : item))
    : [record, ...state.records];
  persistRecords();
  clearForm(false);
  renderAll();
  showToast(previous ? "수정했습니다." : "저장했습니다.");
}

function clearForm(resetType) {
  els.recordId.value = "";
  els.amount.value = "";
  els.title.value = "";
  els.memo.value = "";
  els.incomeStatus.value = "received";
  els.scope.value = "business";
  els.saveRecordBtn.textContent = "저장";
  els.cancelEditBtn.hidden = true;
  if (resetType) state.type = "income";
  setDefaults();
  updateTypeUI();
}

function renderAll() {
  els.monthInput.value = state.month;
  els.monthTitle.textContent = formatMonthTitle(state.month);
  renderSummary();
  renderCalendarIncome();
  renderPending();
  renderLessonIncome();
  renderInsights();
  renderRecords();
}

function renderSummary() {
  const monthRecords = recordsForCashMonth(state.month);
  const calendarItems = calendarItemsForMonth(state.month);
  const calendarPaid = sum(calendarItems.filter((item) => item.paid));
  const calendarUnpaid = sum(calendarItems.filter((item) => !item.paid));
  const receivedIncome =
    sum(monthRecords.filter((record) => record.type === "income" && record.status === "received")) +
    calendarPaid;
  const pendingIncome =
    sum(monthRecords.filter((record) => record.type === "income" && record.status === "pending")) +
    calendarUnpaid;
  const businessExpense = sum(
    monthRecords.filter((record) => record.type === "expense" && record.scope === "business")
  );
  const personalExpense = sum(
    monthRecords.filter((record) => record.type === "expense" && record.scope === "personal")
  );
  const investmentTotal = sum(monthRecords.filter((record) => record.type === "investment"));
  const cashLeft = receivedIncome - businessExpense - personalExpense - investmentTotal;

  els.receivedIncome.textContent = formatWon(receivedIncome);
  els.pendingIncome.textContent = formatWon(pendingIncome);
  els.businessExpense.textContent = formatWon(businessExpense);
  els.personalExpense.textContent = formatWon(personalExpense);
  els.investmentTotal.textContent = formatWon(investmentTotal);
  els.cashLeft.textContent = formatWon(cashLeft);
}

function renderCalendarIncome() {
  const items = calendarItemsForMonth(state.month).sort((a, b) => a.date.localeCompare(b.date));
  updateCalendarTotals();

  if (!items.length) {
    els.calendarIncomeList.innerHTML = `<div class="empty-state">선택한 월의 캘린더 강의 일정이 없습니다.</div>`;
    return;
  }

  els.calendarIncomeList.innerHTML = items.map(renderCalendarItem).join("");
}

function updateCalendarTotals() {
  const items = calendarItemsForMonth(state.month);
  const total = sum(items);
  const paid = sum(items.filter((item) => item.paid));
  const unpaid = total - paid;

  els.calendarMonthTotal.textContent = formatWon(total);
  els.calendarPaidTotal.textContent = formatWon(paid);
  els.calendarUnpaidTotal.textContent = formatWon(unpaid);
  els.calendarIncomeCount.textContent = `${items.length}건`;
}

function renderCalendarItem(item) {
  const paidClass = item.paid ? "is-paid" : "";
  return `
    <article class="calendar-income-item ${paidClass}" data-calendar-id="${escapeAttr(item.id)}">
      <div class="calendar-info">
        <strong>${escapeHtml(item.title)}</strong>
        <span>${formatFullDate(item.date)} · ${escapeHtml(item.startTime || "")}${item.endTime ? `-${escapeHtml(item.endTime)}` : ""} · ${escapeHtml(item.category)}</span>
      </div>
      <label class="calendar-amount-label">
        <span>수익</span>
        <input type="number" min="0" step="1000" inputmode="numeric" data-calendar-amount value="${Number(item.amount || 0)}" placeholder="0">
      </label>
      <label class="paid-check">
        <input type="checkbox" data-calendar-paid ${item.paid ? "checked" : ""}>
        <span>입금 완료</span>
      </label>
    </article>
  `;
}

function updateCalendarAmount(event) {
  const input = event.target.closest("[data-calendar-amount]");
  if (!input) return;
  const item = findCalendarItem(input);
  if (!item) return;
  item.amount = Math.max(0, Number(input.value) || 0);
  persistCalendarItems();
  renderSummary();
  updateCalendarTotals();
  renderInsights();
}

function updateCalendarPaid(event) {
  const checkbox = event.target.closest("[data-calendar-paid]");
  if (!checkbox) return;
  const item = findCalendarItem(checkbox);
  if (!item) return;
  item.paid = checkbox.checked;
  persistCalendarItems();
  renderSummary();
  renderCalendarIncome();
  showToast(item.paid ? "입금 완료로 표시했습니다." : "미입금으로 변경했습니다.");
}

function findCalendarItem(element) {
  const wrapper = element.closest("[data-calendar-id]");
  if (!wrapper) return null;
  return state.calendarItems.find((item) => item.id === wrapper.dataset.calendarId);
}

function autoImportSeedEvents() {
  if (localStorage.getItem(CALENDAR_SEED_VERSION_KEY)) return;
  const added = mergeSeedEvents();
  if (added) persistCalendarItems();
  localStorage.setItem(CALENDAR_SEED_VERSION_KEY, "imported");
}

function mergeSeedEvents() {
  const existingIds = new Set(state.calendarItems.map((item) => item.id));
  const now = new Date().toISOString();
  const newItems = calendarSeedEvents
    .map(normalizeSeedEvent)
    .filter((item) => !existingIds.has(item.id));
  state.calendarItems = [
    ...state.calendarItems,
    ...newItems.map((item) => ({
      ...item,
      amount: 0,
      paid: false,
      importedAt: now,
    })),
  ];
  return newItems.length;
}

function normalizeSeedEvent(event) {
  return {
    id: `calendar-${event.date}-${slugify(event.title)}-${event.startTime || "all"}`,
    title: event.title,
    category: event.category || guessCalendarCategory(event.title),
    date: event.date,
    startTime: event.startTime || "",
    endTime: event.endTime || "",
  };
}

function clearCalendarMonth() {
  const items = calendarItemsForMonth(state.month);
  if (!items.length) {
    showToast("비울 일정이 없습니다.");
    return;
  }
  const ok = window.confirm(`${formatMonthTitle(state.month)} 캘린더 수익 일정 ${items.length}건을 비울까요?`);
  if (!ok) return;
  const ids = new Set(items.map((item) => item.id));
  state.calendarItems = state.calendarItems.filter((item) => !ids.has(item.id));
  persistCalendarItems();
  renderAll();
  showToast("이번 달 캘린더 일정을 비웠습니다.");
}

function renderPending() {
  const pending = state.records
    .filter((record) => record.type === "income" && record.status === "pending")
    .sort((a, b) => a.paymentDate.localeCompare(b.paymentDate));

  els.pendingCount.textContent = `${pending.length}건`;
  if (!pending.length) {
    els.pendingList.innerHTML = `<div class="empty-state">입금 예정 기록이 없습니다.</div>`;
    return;
  }

  els.pendingList.innerHTML = pending.map(renderMoneyItem).join("");
  bindRecordActions(els.pendingList);
}

function renderLessonIncome() {
  const lectureRecords = state.records
    .filter((record) => record.type === "income" && toMonth(record.lectureDate) === state.month)
    .sort((a, b) => b.lectureDate.localeCompare(a.lectureDate));
  const total = sum(lectureRecords);

  els.lessonIncomeCount.textContent = `${lectureRecords.length}건 · ${formatWon(total)}`;
  if (!lectureRecords.length) {
    els.lessonIncomeList.innerHTML = `<div class="empty-state">선택한 월의 직접 입력 수입이 없습니다.</div>`;
    return;
  }

  els.lessonIncomeList.innerHTML = lectureRecords.map(renderMoneyItem).join("");
  bindRecordActions(els.lessonIncomeList);
}

function renderInsights() {
  const monthRecords = recordsForCashMonth(state.month);
  const calendarGroups = groupCalendarAmounts(calendarItemsForMonth(state.month));
  const manualIncomeGroups = groupAmounts(
    monthRecords.filter((record) => record.type === "income"),
    "category"
  );
  const incomeGroups = mergeGroups(manualIncomeGroups, calendarGroups);
  const outgoingGroups = groupAmounts(
    monthRecords.filter((record) => record.type === "expense" || record.type === "investment"),
    "category"
  );

  els.incomeBars.innerHTML = renderBars(incomeGroups, "income");
  els.outgoingBars.innerHTML = renderBars(outgoingGroups, "outgoing");
}

function renderRecords() {
  const records = recordsForCashMonth(state.month)
    .filter((record) => state.filter === "all" || record.type === state.filter)
    .sort((a, b) => getCashDate(b).localeCompare(getCashDate(a)));

  if (!records.length) {
    els.recordsList.innerHTML = `<div class="empty-state">선택한 월의 직접 입력 기록이 없습니다.</div>`;
    return;
  }

  els.recordsList.innerHTML = records.map(renderMoneyItem).join("");
  bindRecordActions(els.recordsList);
}

function renderMoneyItem(record) {
  const typeClass = record.type === "expense" ? "type-expense" : record.type === "investment" ? "type-investment" : "";
  const status = getStatusChip(record);
  const dateText = record.type === "income"
    ? `강의 ${formatShortDate(record.lectureDate)} · 입금 ${formatShortDate(record.paymentDate)}`
    : `${formatShortDate(record.date)} · ${record.scope === "personal" ? "개인" : "사업"}`;
  const sessions = record.type === "income" ? ` · ${record.sessionCount || 1}차시` : "";
  const memo = record.memo ? ` · ${escapeHtml(record.memo)}` : "";

  return `
    <article class="money-item" data-id="${escapeAttr(record.id)}">
      <div class="item-main">
        <div class="item-title-row">
          <span class="type-dot ${typeClass}" aria-hidden="true"></span>
          <span class="item-title">${escapeHtml(record.title)}</span>
        </div>
        <div class="item-meta">${escapeHtml(record.category)} · ${dateText}${sessions}${memo}</div>
      </div>
      <div class="item-amount">
        <span>${formatWon(record.amount)}</span>
        ${status}
        <div class="item-actions">
          <button class="mini-icon" type="button" data-action="edit" title="수정">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
          </button>
          <button class="mini-icon" type="button" data-action="delete" title="삭제">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M6 6l1 14h10l1-14"/><path d="M10 11v5"/><path d="M14 11v5"/></svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

function getStatusChip(record) {
  if (record.type === "income") {
    const className = record.status === "pending" ? "status-pending" : "status-received";
    const label = record.status === "pending" ? "예정" : "완료";
    return `<span class="status-chip ${className}">${label}</span>`;
  }
  const className = record.scope === "personal" ? "status-personal" : "status-business";
  const label = record.scope === "personal" ? "개인" : "사업";
  return `<span class="status-chip ${className}">${label}</span>`;
}

function bindRecordActions(root) {
  root.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest("[data-id]");
      const record = state.records.find((entry) => entry.id === item.dataset.id);
      if (!record) return;
      if (button.dataset.action === "edit") {
        editRecord(record);
      } else {
        deleteRecord(record.id);
      }
    });
  });
}

function editRecord(record) {
  state.type = record.type;
  updateTypeUI();
  els.recordId.value = record.id;
  els.amount.value = record.amount;
  els.category.value = record.category;
  els.title.value = record.title;
  els.memo.value = record.memo || "";

  if (record.type === "income") {
    els.lectureDate.value = record.lectureDate;
    els.paymentDate.value = record.paymentDate;
    els.incomeStatus.value = record.status;
    els.sessionCount.value = String(record.sessionCount || 1);
  } else {
    els.recordDate.value = record.date;
    els.scope.value = record.scope || "business";
  }

  els.saveRecordBtn.textContent = "수정 저장";
  els.cancelEditBtn.hidden = false;
  updateIncomeStatusLabel();
  document.querySelector(".entry-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteRecord(id) {
  const record = state.records.find((entry) => entry.id === id);
  if (!record) return;
  const ok = window.confirm(`"${record.title}" 기록을 삭제할까요?`);
  if (!ok) return;
  state.records = state.records.filter((entry) => entry.id !== id);
  persistRecords();
  renderAll();
  showToast("삭제했습니다.");
}

function renderBars(groups, kind) {
  if (!groups.length) {
    return `<div class="empty-state">집계할 기록이 없습니다.</div>`;
  }

  const max = Math.max(...groups.map((item) => item.amount));
  return groups
    .map((item) => {
      const width = max > 0 ? Math.max((item.amount / max) * 100, 6) : 0;
      const fillClass = kind === "outgoing" ? "outgoing" : "";
      return `
        <div class="bar-row">
          <div class="bar-meta">
            <span>${escapeHtml(item.label)}</span>
            <strong>${formatWon(item.amount)}</strong>
          </div>
          <div class="bar-track">
            <div class="bar-fill ${fillClass}" style="width: ${width}%"></div>
          </div>
        </div>
      `;
    })
    .join("");
}

function exportJson() {
  const payload = {
    app: "두드림 머니노트",
    exportedAt: new Date().toISOString(),
    records: state.records,
    calendarItems: state.calendarItems,
  };
  downloadFile(
    `dodream-money-note-${state.month}.json`,
    JSON.stringify(payload, null, 2),
    "application/json"
  );
  showToast("백업 파일을 만들었습니다.");
}

function importJson(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const records = Array.isArray(parsed) ? parsed : parsed.records;
      if (Array.isArray(records)) {
        state.records = records.filter(isValidRecord);
        persistRecords();
      }
      if (Array.isArray(parsed.calendarItems)) {
        state.calendarItems = parsed.calendarItems.filter(isValidCalendarItem);
        persistCalendarItems();
      }
      renderAll();
      showToast("불러왔습니다.");
    } catch {
      showToast("파일 형식을 확인해 주세요.");
    } finally {
      els.importFile.value = "";
    }
  };
  reader.readAsText(file);
}

function exportCsv() {
  const records = recordsForCashMonth(state.month);
  const calendarItems = calendarItemsForMonth(state.month);
  const header = [
    "종류",
    "상태",
    "날짜",
    "입금일",
    "기관/내용",
    "항목",
    "구분",
    "금액",
    "차수",
    "메모",
  ];
  const rows = [
    ...calendarItems.map((item) => [
      "캘린더수익",
      item.paid ? "입금완료" : "미입금",
      item.date,
      item.paid ? item.date : "",
      item.title,
      item.category,
      "",
      item.amount,
      "",
      `${item.startTime || ""}${item.endTime ? `-${item.endTime}` : ""}`,
    ]),
    ...records.map((record) => [
      typeLabel(record.type),
      record.type === "income" ? statusLabel(record.status) : "",
      record.type === "income" ? record.lectureDate : record.date,
      record.type === "income" ? record.paymentDate : "",
      record.title,
      record.category,
      record.scope === "personal" ? "개인" : record.type === "income" ? "" : "사업",
      record.amount,
      record.type === "income" ? record.sessionCount || 1 : "",
      record.memo || "",
    ]),
  ];
  const csv = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  downloadFile(`dodream-money-note-${state.month}.csv`, `\ufeff${csv}`, "text/csv;charset=utf-8");
  showToast("CSV 파일을 만들었습니다.");
}

function shiftMonth(delta) {
  const [year, month] = state.month.split("-").map(Number);
  const date = new Date(year, month - 1 + delta, 1);
  state.month = toMonth(date);
  renderAll();
}

function recordsForCashMonth(month) {
  return state.records.filter((record) => toMonth(getCashDate(record)) === month);
}

function calendarItemsForMonth(month) {
  return state.calendarItems.filter((item) => toMonth(item.date) === month);
}

function getCashDate(record) {
  if (record.type === "income") return record.paymentDate || record.lectureDate;
  return record.date;
}

function groupAmounts(records, key) {
  const groups = records.reduce((acc, record) => {
    const label = record[key] || "기타";
    acc[label] = (acc[label] || 0) + Number(record.amount || 0);
    return acc;
  }, {});
  return Object.entries(groups)
    .map(([label, amount]) => ({ label, amount }))
    .sort((a, b) => b.amount - a.amount);
}

function groupCalendarAmounts(items) {
  const groups = items.reduce((acc, item) => {
    const label = item.category || "캘린더 수익";
    acc[label] = (acc[label] || 0) + Number(item.amount || 0);
    return acc;
  }, {});
  return Object.entries(groups).map(([label, amount]) => ({ label, amount }));
}

function mergeGroups(...groupLists) {
  const merged = {};
  groupLists.flat().forEach((group) => {
    merged[group.label] = (merged[group.label] || 0) + group.amount;
  });
  return Object.entries(merged)
    .map(([label, amount]) => ({ label, amount }))
    .filter((group) => group.amount > 0)
    .sort((a, b) => b.amount - a.amount);
}

function loadRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const records = JSON.parse(raw);
    return Array.isArray(records) ? records.filter(isValidRecord) : [];
  } catch {
    return [];
  }
}

function loadCalendarItems() {
  try {
    const raw = localStorage.getItem(CALENDAR_STORAGE_KEY);
    if (!raw) return [];
    const items = JSON.parse(raw);
    return Array.isArray(items) ? items.filter(isValidCalendarItem) : [];
  } catch {
    return [];
  }
}

function persistRecords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.records));
}

function persistCalendarItems() {
  localStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(state.calendarItems));
}

function isValidRecord(record) {
  return record && typeof record.id === "string" && ["income", "expense", "investment"].includes(record.type);
}

function isValidCalendarItem(item) {
  return item && typeof item.id === "string" && typeof item.date === "string" && typeof item.title === "string";
}

function sum(items) {
  return items.reduce((total, item) => total + Number(item.amount || 0), 0);
}

function formatWon(value) {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatMonthTitle(month) {
  const [year, value] = month.split("-");
  return `${year}년 ${Number(value)}월`;
}

function formatShortDate(value) {
  if (!value) return "";
  const [, month, date] = value.split("-");
  return `${Number(month)}.${Number(date)}`;
}

function formatFullDate(value) {
  const [year, month, date] = value.split("-").map(Number);
  const day = new Date(year, month - 1, date).toLocaleDateString("ko-KR", { weekday: "short" });
  return `${month}.${date}(${day})`;
}

function toMonth(value) {
  if (typeof value === "string" && /^\d{4}-\d{2}/.test(value)) {
    return value.slice(0, 7);
  }
  const date = value instanceof Date ? value : new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function toDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function typeLabel(type) {
  if (type === "income") return "수입";
  if (type === "expense") return "지출";
  return "투자";
}

function statusLabel(status) {
  return status === "pending" ? "입금예정" : "입금완료";
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    els.toast.classList.remove("show");
  }, 1700);
}

function makeSeedEvents(title, category, dates, startTime, endTime) {
  return dates.map((date) => ({ title, category, date, startTime, endTime }));
}

function guessCalendarCategory(title) {
  if (title.includes("성환")) return "성환초등학교";
  if (title.includes("월봉")) return "월봉초등학교";
  if (title.includes("두정") || title.toLowerCase().includes("chat")) return "두정평생학습관";
  if (title.includes("콘텐츠")) return "콘텐츠 수익";
  return "특강";
}

function slugify(value) {
  return String(value)
    .normalize("NFKD")
    .replace(/[^\w가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function makeId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `record-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
