var countries = ['Albania',
'Algeria', 'Angola', 'Argentina' ,'Armenia'
 ,'Australia'
 ,'Austria'
,'Azerbaijan'
 ,'Bahrain'
 ,'Bangladesh'
 ,'Belarus'
 ,'Belgium'
 ,'Benin'
 ,'Bolivia'
 ,'Bosnia and Herzegovina'
 ,'Botswana'
 ,'Brazil'
 ,'Brunei Darussalam'
 ,'Bulgaria'
 ,'Cambodia'
 ,'Cameroon'
 ,'Canada'
 ,'Chile'
 ,'China'
 ,'Colombia'
 ,'Congo, Dem. Rep.'
 ,'Congo, Rep.'
 ,'Costa Rica'
 ,'Croatia'
 ,'Cuba'
 ,'Cyprus'
 ,'Czech Republic'
 ,'Denmark'
 ,'Dominican Republic'
 ,'Ecuador'
 ,'Egypt, Arab Rep.'
 ,'El Salvador'
 ,'Eritrea'
 ,'Estonia'
 ,'Ethiopia'
 ,'Finland'
 ,'France'
 ,'Gabon'
 ,'Georgia'
    ,'Germany'
    ,'Ghana'
    ,'Greece'
    ,'Guatemala'
    ,'Haiti'
    ,'Honduras'
    ,'Hong Kong SAR, China'
    ,'Hungary'
    ,'Iceland'
    ,'India'
    ,'Indonesia'
    ,'Iran, Islamic Rep.'
    ,'Iraq'
    ,'Ireland'
    ,'Israel'
    ,'Italy'
    ,'Jamaica'
    ,'Japan'
    ,'Jordan'
    ,'Kazakhstan'
    ,'Kenya'
    ,'Korea, Rep.'
    ,'Kuwait'
    ,'Kyrgyz Republic'
    ,'Latvia'
    ,'Lebanon'
    ,'Libya'
    ,'Lithuania'
    ,'Luxembourg'
    ,'Macedonia, FYR'
    ,'Malaysia'
    ,'Malta'
    ,'Mexico'
    ,'Moldova'
    ,'Mongolia'
    ,'Montenegro'
    ,'Morocco'
    ,'Mozambique'
    ,'Myanmar'
    ,'Namibia'
    ,'Nepal'
    ,'Netherlands'
    ,'New Zealand'
    ,'Nicaragua'
    ,'Nigeria'
    ,'Norway'
    ,'Oman'
    ,'Pakistan'
    ,'Panama'
    ,'Paraguay'
    ,'Peru'
    ,'Philippines'
    ,'Poland'
    ,'Portugal'
    ,'Qatar'
    ,'Romania'
    ,'Russian Federation'
    ,'Saudi Arabia'
    ,'Senegal'
    ,'Serbia'
    ,'Singapore'
    ,'Slovak Republic'
    ,'Slovenia'
    ,'South Africa'
    ,'Spain'
    ,'Sri Lanka'
    ,'Sudan'
    ,'Sweden'
    ,'Switzerland'
    ,'Syrian Arab Republic'
    ,'Tajikistan'
    ,'Tanzania'
    ,'Thailand'
    ,'Togo'
    ,'Trinidad and Tobago'
    ,'Tunisia'
    ,'Turkey'
    ,'Turkmenistan'
    ,'Ukraine'
    ,'United Arab Emirates'
    ,'United Kingdom'
    ,'United States'
    ,'Uruguay'
    ,'Uzbekistan'
    ,'Venezuela, RB'
    ,'Vietnam'
    ,'Yemen, Rep.'
    ,'Zambia'
    ,'Zimbabwe']

Plotly.d3.csv('./assets/Resources/final3.csv', (err, rows) => {
  var data = countries.map(y => {
    var d = rows.filter(r => r.index === y)
    
    return {
      type: 'bar',
      name: y,
      x: d.map(r => r['index']),
      y: d.map(r => r['Electric Power Consumption'])
    }
  })
  
  var layout = {
    title: "Electric power consumption (kWh per capita)"
   }

  Plotly.newPlot('graph', data, layout)
})