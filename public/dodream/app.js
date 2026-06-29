const STORAGE_KEY = "dodreamMoneyNote.records.v1";
const CALENDAR_STORAGE_KEY = "dodreamMoneyNote.calendarIncome.v1";
const CALENDAR_SEED_VERSION_KEY = "dodreamMoneyNote.calendarSeed.v20260629.liveRedFromMay";
const RED_CALENDAR_COLOR_ID = "11";

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
    "2026-05-08", "2026-05-11", "2026-05-15", "2026-05-18", "2026-05-22",
    "2026-05-29", "2026-06-01", "2026-06-05", "2026-06-08", "2026-06-12", "2026-06-15",
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
  ...makeSeedEvents("월봉초코딩", "월봉초등학교", [
    "2026-05-06", "2026-05-13", "2026-05-20", "2026-05-27",
    "2026-06-10", "2026-06-17", "2026-06-24", "2026-07-01", "2026-07-08",
    "2026-07-15", "2026-07-22", "2026-08-26", "2026-09-02", "2026-09-09",
    "2026-09-16", "2026-09-23", "2026-09-30", "2026-10-07", "2026-10-14",
    "2026-10-21", "2026-10-28", "2026-11-04", "2026-11-11", "2026-11-18",
    "2026-11-25", "2026-12-02", "2026-12-09", "2026-12-16", "2026-12-23",
    "2026-12-30",
  ], "14:00", "15:20"),
  ...makeSeedEvents("ChatGPT 활용 글짓기", "두정평생학습관", [
    "2026-05-08", "2026-05-15", "2026-05-22", "2026-05-29",
    "2026-06-05", "2026-06-12", "2026-06-19", "2026-06-26", "2026-07-03",
    "2026-08-10", "2026-08-24", "2026-08-31", "2026-09-07", "2026-09-14",
    "2026-09-21", "2026-09-28", "2026-10-05", "2026-10-12", "2026-10-19",
    "2026-10-26", "2026-11-02", "2026-11-09", "2026-11-20", "2026-11-27",
  ], "10:00", "12:00"),
  ...makeSeedEvents("아청문 CDT", "특강", [
    "2026-05-07", "2026-05-14", "2026-05-21",
    "2026-09-03", "2026-09-10", "2026-09-17", "2026-09-24", "2026-10-01",
    "2026-10-08", "2026-10-15", "2026-10-22", "2026-10-29", "2026-11-05",
    "2026-11-12", "2026-11-19",
  ], "17:30", "19:30"),
  { title: "두평학들르기_서명", category: "두정평생학습관", date: "2026-05-04", startTime: "11:00", endTime: "11:30" },
  { title: "예산군여성회관_업무효율화", category: "특강", date: "2026-05-06", startTime: "09:30", endTime: "12:30" },
  { title: "여성인력_콘텐츠만들기반", category: "여성인력개발센터", date: "2026-05-07", startTime: "14:00", endTime: "16:00" },
  { title: "여성인력_콘텐츠만들기반", category: "여성인력개발센터", date: "2026-05-14", startTime: "14:00", endTime: "16:00" },
  { title: "여성인력_콘텐츠만들기반", category: "여성인력개발센터", date: "2026-05-21", startTime: "13:00", endTime: "16:00" },
  ...makeSeedEvents("다문화센터교육", "특강", [
    "2026-05-19", "2026-05-26",
  ], "10:00", "13:00"),
  { title: "청복커체험부스", category: "특강", date: "2026-05-30", startTime: "10:00", endTime: "16:00" },
  { title: "태조산진로직업체험 박람회_부스", category: "특강", date: "2026-06-04", startTime: "", endTime: "" },
  { title: "태조산부스운영", category: "특강", date: "2026-06-04", startTime: "07:30", endTime: "16:00" },
  { title: "cDT코딩 결과 발표 일", category: "특강", date: "2026-06-05", startTime: "", endTime: "" },
  { title: "다문화보조", category: "특강", date: "2026-06-09", startTime: "10:00", endTime: "12:00" },
  { title: "부여교원연수_vids", category: "특강", date: "2026-06-10", startTime: "14:00", endTime: "16:30" },
  { title: "다문화센터_이미지만들기강의", category: "특강", date: "2026-06-16", startTime: "09:30", endTime: "13:00" },
  { title: "다문화센터_블로그 강의", category: "특강", date: "2026-06-18", startTime: "10:00", endTime: "13:00" },
  { title: "석성중학교 18명_알티노", category: "특강", date: "2026-07-07", startTime: "13:30", endTime: "16:00" },
  { title: "부여AI센터교구교육", category: "특강", date: "2026-06-30", startTime: "14:00", endTime: "17:30" },
  { title: "코딩 교육 수업_천안시청소년복합커뮤니티센터", category: "특강", date: "2026-08-07", startTime: "13:00", endTime: "15:00" },
  { title: "코딩 교육 수업_천안시청소년복합커뮤니티센터", category: "특강", date: "2026-08-08", startTime: "13:00", endTime: "15:00" },
  { title: "복합커뮤니티센터", category: "특강", date: "2026-08-11", startTime: "10:00", endTime: "11:30" },
  { title: "복합커뮤니티센터", category: "특강", date: "2026-08-13", startTime: "10:00", endTime: "11:30" },
  { title: "여성인력_생성형AI", category: "여성인력개발센터", date: "2026-08-13", startTime: "14:00", endTime: "16:00" },
  { title: "복합커뮤니티센터_돌봄", category: "특강", date: "2026-08-14", startTime: "10:00", endTime: "11:50" },
  ...makeSeedEvents("백석대앵커사업단_천안시통합돌봄센터", "특강", [
    "2026-08-24", "2026-08-31", "2026-09-07", "2026-09-14",
  ], "19:00", "21:00"),
].map((event) => ({ ...event, colorId: RED_CALENDAR_COLOR_ID }));

const redCalendarIdentities = new Set(
  calendarSeedEvents.map((event) => calendarIdentity(event.title, event.category || guessCalendarCategory(event.title)))
);

const state = {
  records: loadRecords(),
  calendarItems: loadCalendarItems(),
  type: "expense",
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
  calendarAddForm: document.getElementById("calendarAddForm"),
  calendarAddTitle: document.getElementById("calendarAddTitle"),
  calendarAddCategory: document.getElementById("calendarAddCategory"),
  calendarAddCount: document.getElementById("calendarAddCount"),
  calendarAddAmount: document.getElementById("calendarAddAmount"),
  calendarAddPaid: document.getElementById("calendarAddPaid"),
  typeButtons: document.querySelectorAll("[data-type]"),
  filterButtons: document.querySelectorAll("[data-filter]"),
  templateRow: document.getElementById("templateRow"),
  recordForm: document.getElementById("recordForm"),
  recordId: document.getElementById("recordId"),
  recordDate: document.getElementById("recordDate"),
  standardDateRow: document.querySelector(".standard-date-row"),
  amount: document.getElementById("amount"),
  category: document.getElementById("category"),
  title: document.getElementById("title"),
  titleLabel: document.getElementById("titleLabel"),
  scope: document.getElementById("scope"),
  memo: document.getElementById("memo"),
  saveRecordBtn: document.getElementById("saveRecordBtn"),
  resetFormBtn: document.getElementById("resetFormBtn"),
  cancelEditBtn: document.getElementById("cancelEditBtn"),
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
  renderCalendarCategoryOptions();
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
    showToast(added ? `${added}개 강의 그룹을 가져왔습니다.` : "새로 가져올 강의 그룹이 없습니다.");
  });
  els.clearCalendarMonthBtn.addEventListener("click", clearCalendarMonth);
  els.calendarAddForm.addEventListener("submit", addCalendarItem);
  els.calendarIncomeList.addEventListener("input", updateCalendarAmount);
  els.calendarIncomeList.addEventListener("change", updateCalendarPaid);
  els.calendarIncomeList.addEventListener("click", deleteCalendarItem);

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
  els.recordDate.value = today;
  els.calendarAddCount.value = "1";
}

function updateTypeUI() {
  els.typeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.type === state.type);
  });

  els.standardDateRow.hidden = false;
  els.scope.closest("label").hidden = false;
  els.titleLabel.textContent = "사용 내용";
  els.title.placeholder = "예: 강의 이동 교통비";

  renderCategoryOptions();
  renderTemplates();
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
    });
  });
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
    showToast("사용 내용을 입력해 주세요.");
    els.title.focus();
    return;
  }

  const now = new Date().toISOString();
  const id = els.recordId.value || makeId();
  const previous = state.records.find((record) => record.id === id);

  if (!els.recordDate.value) {
    showToast("사용일을 입력해 주세요.");
    return;
  }

  const record = {
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
  els.scope.value = "business";
  els.saveRecordBtn.textContent = "저장";
  els.cancelEditBtn.hidden = true;
  if (resetType) state.type = "expense";
  setDefaults();
  updateTypeUI();
}

function renderAll() {
  els.monthInput.value = state.month;
  els.monthTitle.textContent = formatMonthTitle(state.month);
  renderSummary();
  renderCalendarIncome();
  renderInsights();
  renderRecords();
}

function renderSummary() {
  const monthRecords = recordsForCashMonth(state.month);
  const calendarItems = calendarItemsForMonth(state.month);
  const calendarPaid = sum(calendarItems.filter((item) => item.paid));
  const calendarUnpaid = sum(calendarItems.filter((item) => !item.paid));
  const receivedIncome = calendarPaid;
  const pendingIncome = calendarUnpaid;
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
  const items = calendarItemsForMonth(state.month).sort(
    (a, b) => calendarSortKey(a).localeCompare(calendarSortKey(b)) || a.title.localeCompare(b.title, "ko")
  );
  updateCalendarTotals();

  if (!items.length) {
    els.calendarIncomeList.innerHTML = `<div class="empty-state">선택한 월의 빨간색 강의 일정이 없습니다.</div>`;
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
  els.calendarIncomeCount.textContent = `${items.length}개 · ${calendarSessionTotal(items)}회`;
}

function renderCalendarItem(item) {
  const paidClass = item.paid ? "is-paid" : "";
  const dates = calendarDateSummary(item);
  const sessions = calendarSessionCount(item);
  return `
    <article class="calendar-income-item ${paidClass}" data-calendar-id="${escapeAttr(item.id)}">
      <div class="calendar-info">
        <strong>${escapeHtml(item.title)}</strong>
        <span title="${escapeAttr(calendarDateFullSummary(item))}">${sessions}회 · ${escapeHtml(dates)} · ${escapeHtml(item.category)}</span>
      </div>
      <label class="calendar-amount-label">
        <span>월 수익</span>
        <input type="number" min="0" step="1000" inputmode="numeric" data-calendar-amount value="${Number(item.amount || 0)}" placeholder="0">
      </label>
      <div class="calendar-item-actions">
        <label class="paid-check">
          <input type="checkbox" data-calendar-paid ${item.paid ? "checked" : ""}>
          <span>입금 완료</span>
        </label>
        <button class="mini-icon calendar-delete-button" type="button" data-calendar-delete title="삭제">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M6 6l1 14h10l1-14"/><path d="M10 11v5"/><path d="M14 11v5"/></svg>
        </button>
      </div>
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

function deleteCalendarItem(event) {
  const button = event.target.closest("[data-calendar-delete]");
  if (!button) return;
  const item = findCalendarItem(button);
  if (!item) return;
  const ok = window.confirm(`"${item.title}" 강의 그룹을 삭제할까요?`);
  if (!ok) return;
  state.calendarItems = state.calendarItems.filter((entry) => entry.id !== item.id);
  persistCalendarItems();
  renderAll();
  showToast("캘린더 강의 그룹을 삭제했습니다.");
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
  state.calendarItems = normalizeCalendarCollection(state.calendarItems);
  const existingById = new Map(state.calendarItems.map((item) => [item.id, item]));
  const now = new Date().toISOString();
  let added = 0;

  groupCalendarEvents(calendarSeedEvents).forEach((group) => {
    const existing = existingById.get(group.id);
    if (existing) {
      mergeCalendarDates(existing, group.dates);
      existing.count = Math.max(calendarSessionCount(existing), group.count);
      existing.source = existing.source || "google-calendar-red";
      existing.colorId = RED_CALENDAR_COLOR_ID;
    } else {
      state.calendarItems.push({
        ...group,
        amount: 0,
        paid: false,
        source: "google-calendar-red",
        colorId: RED_CALENDAR_COLOR_ID,
        importedAt: now,
      });
      added += 1;
    }
  });

  state.calendarItems = normalizeCalendarCollection(state.calendarItems);
  return added;
}

function renderCalendarCategoryOptions() {
  els.calendarAddCategory.innerHTML = categories.income
    .filter((category) => category !== "콘텐츠 수익" && category !== "기타 수입")
    .map((category) => `<option value="${escapeAttr(category)}">${escapeHtml(category)}</option>`)
    .join("");
  els.calendarAddCategory.value = "특강";
}

function addCalendarItem(event) {
  event.preventDefault();
  const title = els.calendarAddTitle.value.trim();
  if (!title) {
    showToast("강의명을 입력해 주세요.");
    els.calendarAddTitle.focus();
    return;
  }

  const category = els.calendarAddCategory.value || guessCalendarCategory(title);
  const count = Math.max(1, Math.floor(Number(els.calendarAddCount.value) || 1));
  const amount = Math.max(0, Number(els.calendarAddAmount.value) || 0);
  const paid = els.calendarAddPaid.checked;
  const item = {
    id: calendarGroupId(title, category, state.month),
    title,
    category,
    month: state.month,
    dates: [],
    count,
    amount,
    paid,
    source: "manual",
    createdAt: new Date().toISOString(),
  };
  const existing = state.calendarItems.find((entry) => entry.id === item.id);

  if (existing) {
    existing.count = calendarSessionCount(existing) + count;
    existing.amount = Number(existing.amount || 0) + amount;
    existing.paid = existing.paid && paid;
    existing.source = existing.source || "manual";
    existing.updatedAt = new Date().toISOString();
  } else {
    state.calendarItems = [item, ...state.calendarItems];
  }

  persistCalendarItems();
  els.calendarAddForm.reset();
  els.calendarAddCategory.value = category;
  els.calendarAddCount.value = "1";
  renderAll();
  showToast(existing ? "기존 강의 그룹에 합쳤습니다." : "강의 그룹을 추가했습니다.");
}

function clearCalendarMonth() {
  const items = calendarItemsForMonth(state.month);
  if (!items.length) {
    showToast("비울 일정이 없습니다.");
    return;
  }
  const ok = window.confirm(`${formatMonthTitle(state.month)} 캘린더 강의 그룹 ${items.length}개를 비울까요?`);
  if (!ok) return;
  const ids = new Set(items.map((item) => item.id));
  state.calendarItems = state.calendarItems.filter((item) => !ids.has(item.id));
  persistCalendarItems();
  renderAll();
  showToast("이번 달 캘린더 일정을 비웠습니다.");
}

function renderInsights() {
  const monthRecords = recordsForCashMonth(state.month);
  const calendarGroups = groupCalendarAmounts(calendarItemsForMonth(state.month));
  const incomeGroups = mergeGroups(calendarGroups);
  const outgoingGroups = groupAmounts(
    monthRecords.filter((record) => record.type === "expense" || record.type === "investment"),
    "category"
  );

  els.incomeBars.innerHTML = renderBars(incomeGroups, "income");
  els.outgoingBars.innerHTML = renderBars(outgoingGroups, "outgoing");
}

function renderRecords() {
  const records = recordsForCashMonth(state.month)
    .filter((record) => record.type === "expense" || record.type === "investment")
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
  const dateText = `${formatShortDate(record.date)} · ${record.scope === "personal" ? "개인" : "사업"}`;
  const memo = record.memo ? ` · ${escapeHtml(record.memo)}` : "";

  return `
    <article class="money-item" data-id="${escapeAttr(record.id)}">
      <div class="item-main">
        <div class="item-title-row">
          <span class="type-dot ${typeClass}" aria-hidden="true"></span>
          <span class="item-title">${escapeHtml(record.title)}</span>
        </div>
        <div class="item-meta">${escapeHtml(record.category)} · ${dateText}${memo}</div>
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
  if (record.type !== "expense" && record.type !== "investment") return;
  state.type = record.type;
  updateTypeUI();
  els.recordId.value = record.id;
  els.amount.value = record.amount;
  els.category.value = record.category;
  els.title.value = record.title;
  els.memo.value = record.memo || "";

  els.recordDate.value = record.date;
  els.scope.value = record.scope || "business";

  els.saveRecordBtn.textContent = "수정 저장";
  els.cancelEditBtn.hidden = false;
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
        state.calendarItems = normalizeCalendarCollection(parsed.calendarItems);
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
      item.month,
      item.paid ? item.month : "",
      item.title,
      item.category,
      "",
      item.amount,
      calendarSessionCount(item),
      calendarDateFullSummary(item),
    ]),
    ...records.map((record) => [
      typeLabel(record.type),
      "",
      record.date,
      "",
      record.title,
      record.category,
      record.scope === "personal" ? "개인" : "사업",
      record.amount,
      "",
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
  return state.calendarItems.filter((item) => item.month === month);
}

function groupCalendarEvents(events) {
  const groups = new Map();
  events
    .filter(isRedCalendarItem)
    .forEach((event) => {
      const title = calendarCanonicalTitle(event.title);
      const category = event.category || guessCalendarCategory(title);
      const month = toMonth(event.date);
      const id = calendarGroupId(title, category, month);
      if (!groups.has(id)) {
        groups.set(id, {
          id,
          title,
          category,
          month,
          dates: [],
          count: 0,
        });
      }
      const group = groups.get(id);
      mergeCalendarDates(group, [{
        date: event.date,
        startTime: event.startTime || "",
        endTime: event.endTime || "",
      }]);
      group.count = calendarSessionCount(group);
    });
  return [...groups.values()];
}

function normalizeCalendarCollection(items) {
  const groups = new Map();
  items.filter(isValidCalendarItem).forEach((item) => {
    const title = calendarCanonicalTitle(item.title);
    const category = item.category || guessCalendarCategory(title);
    const manual = item.source === "manual";
    if (!manual && !isRedCalendarItem({ title, category, colorId: item.colorId })) return;

    const dates = normalizeCalendarDates(item);
    const monthSource = dates[0]?.date || item.date || "";
    const month = item.month || (monthSource ? toMonth(monthSource) : "");
    if (!title || !month) return;

    const id = calendarGroupId(title, category, month);
    const amount = Number(item.amount || 0);
    const count = Math.max(Number(item.count || 0), dates.length || 1);
    if (!groups.has(id)) {
      groups.set(id, {
        id,
        title,
        category,
        month,
        dates: [],
        count: 0,
        amount: 0,
        paid: Boolean(item.paid),
        source: manual ? "manual" : "google-calendar-red",
        colorId: manual ? "" : RED_CALENDAR_COLOR_ID,
        importedAt: item.importedAt,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      });
    }

    const group = groups.get(id);
    mergeCalendarDates(group, dates);
    group.count = dates.length ? Math.max(group.count, group.dates.length) : group.count + count;
    group.amount += amount;
    group.paid = group.paid && Boolean(item.paid);
  });
  return [...groups.values()];
}

function normalizeCalendarDates(item) {
  const rawDates = Array.isArray(item.dates)
    ? item.dates
    : item.date
      ? [{ date: item.date, startTime: item.startTime, endTime: item.endTime }]
      : [];
  return rawDates
    .map((entry) => {
      if (typeof entry === "string") return { date: entry, startTime: "", endTime: "" };
      return {
        date: entry?.date || "",
        startTime: entry?.startTime || "",
        endTime: entry?.endTime || "",
      };
    })
    .filter((entry) => /^\d{4}-\d{2}-\d{2}$/.test(entry.date))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function mergeCalendarDates(group, dates) {
  const existing = new Map((group.dates || []).map((entry) => [calendarDateKey(entry), entry]));
  dates.forEach((entry) => {
    if (!entry?.date) return;
    existing.set(calendarDateKey(entry), {
      date: entry.date,
      startTime: entry.startTime || "",
      endTime: entry.endTime || "",
    });
  });
  group.dates = [...existing.values()].sort((a, b) => a.date.localeCompare(b.date));
  group.count = Math.max(Number(group.count || 0), group.dates.length);
}

function calendarDateKey(entry) {
  return entry.date;
}

function calendarSessionCount(item) {
  return Math.max(Number(item.count || 0), Array.isArray(item.dates) ? item.dates.length : 0, item.date ? 1 : 0);
}

function calendarSessionTotal(items) {
  return items.reduce((total, item) => total + calendarSessionCount(item), 0);
}

function calendarSortKey(item) {
  return item.dates?.[0]?.date || `${item.month}-01`;
}

function calendarDateSummary(item) {
  const dates = item.dates || [];
  if (!dates.length) return `${formatMonthTitle(item.month)} 직접 추가`;
  if (dates.length <= 4) return dates.map((entry) => formatShortDate(entry.date)).join(", ");
  return `${formatShortDate(dates[0].date)} 외 ${dates.length - 1}회`;
}

function calendarDateFullSummary(item) {
  const dates = item.dates || [];
  if (!dates.length) return `${formatMonthTitle(item.month)} 직접 추가 ${calendarSessionCount(item)}회`;
  return dates
    .map((entry) => `${formatFullDate(entry.date)} ${entry.startTime || ""}${entry.endTime ? `-${entry.endTime}` : ""}`.trim())
    .join(", ");
}

function getCashDate(record) {
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
    return Array.isArray(items) ? normalizeCalendarCollection(items) : [];
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
  return record && typeof record.id === "string" && ["expense", "investment"].includes(record.type);
}

function isValidCalendarItem(item) {
  return item && typeof item.title === "string" && (typeof item.date === "string" || typeof item.month === "string");
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
  if (title.includes("여성인력")) return "여성인력개발센터";
  if (title.includes("성환")) return "성환초등학교";
  if (title.includes("월봉")) return "월봉초등학교";
  if (title.includes("두정") || title.toLowerCase().includes("chat")) return "두정평생학습관";
  if (title.includes("콘텐츠")) return "콘텐츠 수익";
  return "특강";
}

function calendarCanonicalTitle(title) {
  const raw = String(title || "").trim();
  const value = normalizeCalendarText(raw);
  if (value.includes("성환초방과후")) return "성환초방과후";
  if (value.includes("월봉초") || value.includes("월봉초방과후")) return "월봉초코딩";
  if (value.includes("chatgpt") || (value.includes("chat") && value.includes("글짓기"))) return "ChatGPT 활용 글짓기";
  if (value.includes("아청문") && value.includes("cdt")) return "아청문 CDT";
  if (value.includes("여성인력") && value.includes("콘텐츠만들기반")) return "여성인력_콘텐츠만들기반";
  if (value.includes("여성인력") && value.includes("생성형ai")) return "여성인력_생성형AI";
  if (value.includes("예산군여성회관")) return "예산군여성회관_업무효율화";
  if (value.includes("다문화센터교육")) return "다문화센터교육";
  if (value.includes("청복커체험부스")) return "청복커체험부스";
  if (value.includes("백석대앵커사업단")) return "백석대앵커사업단_천안시통합돌봄센터";
  if (value.includes("복합커뮤니티센터") && value.includes("돌봄")) return "복합커뮤니티센터_돌봄";
  if (value.includes("복합커뮤니티센터")) return "복합커뮤니티센터";
  return raw;
}

function isRedCalendarItem(item) {
  const title = String(item.title || "");
  const category = item.category || guessCalendarCategory(title);
  const normalizedTitle = normalizeCalendarText(title);
  if (!normalizedTitle || normalizedTitle.includes("콘텐츠수업")) return false;
  if (item.colorId && String(item.colorId) !== RED_CALENDAR_COLOR_ID) return false;
  return (
    String(item.colorId || "") === RED_CALENDAR_COLOR_ID ||
    redCalendarIdentities.has(calendarIdentity(title, category)) ||
    isKnownRedClassTitle(title)
  );
}

function isKnownRedClassTitle(title) {
  const value = normalizeCalendarText(title);
  return [
    "성환초방과후",
    "성환초방과후수업",
    "월봉초방과후",
    "월봉초코딩",
    "chatgpt활용글짓기",
    "chatgptgpt활용글짓기",
    "아청문cdt",
    "두평학들르기서명",
    "예산군여성회관업무효율화",
    "여성인력콘텐츠만들기반",
    "태조산진로직업체험박람회부스",
    "태조산부스운영",
    "cdt코딩결과발표일",
    "다문화보조",
    "다문화센터교육",
    "부여교원연수vids",
    "다문화센터이미지만들기강의",
    "다문화센터블로그강의",
    "석성중학교18명알티노",
    "부여ai센터교구교육",
    "코딩교육수업천안시청소년복합커뮤니티센터",
    "복합커뮤니티센터",
    "복합커뮤니티센터돌봄",
    "여성인력생성형ai",
    "청복커체험부스",
    "백석대앵커사업단천안시통합돌봄센터",
  ].some((keyword) => value.includes(normalizeCalendarText(keyword)));
}

function calendarGroupId(title, category, month) {
  return `calendar-group-${month}-${slugify(calendarIdentity(title, category))}`;
}

function calendarIdentity(title, category) {
  return `${normalizeCalendarText(calendarCanonicalTitle(title))}|${normalizeCalendarText(category || "")}`;
}

function normalizeCalendarText(value) {
  return String(value || "")
    .normalize("NFKC")
    .replace(/\s+/g, "")
    .replace(/[^\w가-힣]/g, "")
    .toLowerCase();
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
