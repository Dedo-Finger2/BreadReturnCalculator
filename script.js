// Config
const breadCost = document.getElementById("bread-cost");

// Data
const userMoney = document.getElementById("money-i-have");
const breads    = document.getElementById("breads");

// Forms
const formBreadToMoney = document.getElementById("form-breads-to-money");
const formMoneyToBread = document.getElementById("form-money-to-breads");

// Sections
const formBreadToMoneySection = document.getElementById("form-section-breads-to-money");
const formMoneyToBreadSection = document.getElementById("form-section-money-to-breads");

// Results
const breadCosting           = document.getElementById("how-much-it-will-cost");
const manyBreadsCanBeBought  = document.getElementById("how-many-breads-can-be-bought");
const moneyReturned          = document.getElementById("money-returned");
const moneyReturned2         = document.getElementById("money-returned-2");

// Buttons
const btnChangeForm = document.getElementById("btn-change-form");

// Functions
function handleChangeForm() {
  formMoneyToBreadSection.classList.toggle("hidden");
  formBreadToMoneySection.classList.toggle("hidden");
}

// Events
btnChangeForm.addEventListener("click", handleChangeForm);

// Form Event
formMoneyToBread.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const moneyReturnedValue = (userMoney.value % breadCost.value).toFixed(2)
  const manyBreadsCanBeBoughtValue = Math.floor(userMoney.value / breadCost.value)

  moneyReturned.textContent         = `Money returned: R$${moneyReturnedValue}`;
  manyBreadsCanBeBought.textContent = `Breads returned: ${manyBreadsCanBeBoughtValue} breads`;
})

// Form Event
formBreadToMoney.addEventListener("submit", (event) => {
  event.preventDefault();

  const breadCostingValue = (breads.value * breadCost.value).toFixed(2);
  const moneyReturned2Value = (breadCostingValue % breadCost.value).toFixed(2);

  breadCosting.textContent = `Costing: R$${breadCostingValue}`;
  moneyReturned2.textContent = `Money returned: R$${moneyReturned2Value}`;
  
})
