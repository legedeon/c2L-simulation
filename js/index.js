import { dateDuJour, écrituresFilename } from './environnements.js'
import écritures from './écritures.js'
import buildPanel from './panel.js'
import drawChart from './chart.js'

const Écritures = new écritures(dateDuJour)

Écritures.fetch(écrituresFilename).then(() => {
    buildPanel(Écritures, dateDuJour.month() + 1)
    drawChart(Écritures, dateDuJour)
})
