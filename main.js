// https://stackoverflow.com/questions/45093510/eslint-not-working-in-vs-code
// https://dev.to/tillsanders/eslint-not-working-in-vscode-help-build-a-troubleshooting-checklist-fdc

// https://medium.com/@Tunmise/set-up-eslint-with-airbnb-style-guide-in-5-minutes-d7b4cc5707f8


const d = new Date();
let currentDay = d.getDay();  // 0 represents Sunday, 1 for Monday, 2 for Tuesday, and so on.
const chartDayMatch = [6, 0, 1, 2, 3, 4, 5];
const currentChartDayMatch = chartDayMatch[currentDay];
const elements = document.querySelector("#spending-chart tbody").children;
const currentElement = elements[currentChartDayMatch].querySelector('td');
currentElement.classList.add('current');
