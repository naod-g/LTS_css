const year = document.getElementById("year")
const thisYear = new Data().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear