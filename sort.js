var sortAgedown = false
var sortOvrdown = false
var sortPotdown = false
var sortoIQdown = false
var sortSacdown = false
var sortShtdown = false
var sortPacdown = false
var sortPasdown = false
var sortBkydown = false
var sortdIQdown = false
var sortRebdown = false
var sortSbkdown = false
var sortStldown = false
var sortStgdown = false
var sortChkdown = false
var sortFofdown = false
var sortSpddown = false
var sortEnddown = false
var sortDrvdown = false
var sortLdrdown = false
var sortPsedown = false

var oneHundred = 25
var hundred = 0
var sortedshtacc

function sortTableshtacc() {
	if (sortSacdown == false) {
		shtaccOfPlayers = []
		for(funnyCounter5 = 0; funnyCounter5 < NHLplayer.length; funnyCounter5++) {
			shtaccOfPlayers[shtaccOfPlayers.length] = NHLplayer[funnyCounter5][8]
		}
		var shtaccSort, zero4;
		sortedshtacc = []
		for(shtaccSort = 0; shtaccSort < NHLplayer.length; shtaccSort++) {
			var newTable4 = shtaccOfPlayers.filter(sortshtacc)
			function sortshtacc(value) {
				return value > shtaccOfPlayers[shtaccSort]
			}
			for(zero4 = 0; zero4 < 50; zero4++) {
				if(sortedshtacc[newTable4.length + zero4] == null || sortedshtacc[newTable4.length + zero4] == undefined) {
					sortedshtacc[newTable4.length + zero4] = playerRows[shtaccSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers4()">Back</td><td id="forward100" class="header" onClick="loadOthers4()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupe4
		for(dupe4 = hundred; dupe4 < oneHundred; dupe4++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe4 + '">' + sortedshtacc[dupe4] + 	'</tr>'
		}
		var f1 = dupe4 - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe4 + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = true
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortSacdown == true) {
		shtaccOfPlayers = []
		for(funnyCounter5 = 0; funnyCounter5 < NHLplayer.length; funnyCounter5++) {
			shtaccOfPlayers[shtaccOfPlayers.length] = NHLplayer[funnyCounter5][8]
		}
		var shtaccSort, zero4;
		sortedshtacc = []
		for(shtaccSort = NHLplayer.length; shtaccSort > 0; shtaccSort--) {
			var newTable4 = shtaccOfPlayers.filter(sortshtacc)
			function sortshtacc(value) {
				return value < shtaccOfPlayers[shtaccSort]
			}
			for(zero4 = 0; zero4 < 50; zero4++) {
				if(sortedshtacc[newTable4.length + zero4] == null || sortedshtacc[newTable4.length + zero4] == undefined) {
					sortedshtacc[newTable4.length + zero4] = playerRows[shtaccSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers4()">Back</td><td id="forward100" class="header" onClick="loadOthers4()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupe4
		for(dupe4 = hundred; dupe4 < oneHundred; dupe4++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe4 + '">' + sortedshtacc[dupe4] + 	'</tr>'
		}
		var f1 = dupe4 - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe4 + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthers4() {
	var dupe4
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers4()">Back</td><td id="forward100" class="header" onClick="loadOthers4()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupe4 = hundred; dupe4 < oneHundred; dupe4++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe4 + '">' + sortedshtacc[dupe4] + '</tr>'
	}
	var f1 = dupe4 - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe4 + ' of ' + NHLplayer.length
}

function reloadOthers4() {
	var dupe4
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers4()">Back</td><td id="forward100" class="header" onClick="loadOthers4()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupe4 = hundred; dupe4 < oneHundred; dupe4++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe4 + '">' + sortedshtacc[dupe4] + '</tr>'
	}
	var f1 = dupe4 - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe4 + ' of ' + NHLplayer.length
}

var sortedsht

function sortTablesht() {
	if (sortShtdown == false) {
		shtOfPlayers = []
		for(funnyCounter6 = 0; funnyCounter6 < NHLplayer.length; funnyCounter6++) {
			shtOfPlayers[shtOfPlayers.length] = NHLplayer[funnyCounter6][7]
		}
		var shtSort, zero5;
		sortedsht = []
		for(shtSort = 0; shtSort < NHLplayer.length; shtSort++) {
			var newTable5 = shtOfPlayers.filter(sortsht)
			function sortsht(value) {
				return value > shtOfPlayers[shtSort]
			}
			for(zero5 = 0; zero5 < 50; zero5++) {
				if(sortedsht[newTable5.length + zero5] == null || sortedsht[newTable5.length + zero5] == undefined) {
					sortedsht[newTable5.length + zero5] = playerRows[shtSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers5()">Back</td><td id="forward100" class="header" onClick="loadOthers5()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		for(dupe5 = hundred; dupe5 < oneHundred; dupe5++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe5 + '">' + sortedsht[dupe5] + '</	tr>'
		}
		var f1 = dupe5 - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe5 + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = true
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortShtdown == true) {
		shtOfPlayers = []
		for(funnyCounter6 = 0; funnyCounter6 < NHLplayer.length; funnyCounter6++) {
			shtOfPlayers[shtOfPlayers.length] = NHLplayer[funnyCounter6][7]
		}
		var shtSort, zero5;
		sortedsht = []
		for(shtSort = NHLplayer.length; shtSort > 0; shtSort--) {
			var newTable5 = shtOfPlayers.filter(sortsht)
			function sortsht(value) {
				return value < shtOfPlayers[shtSort]
			}
			for(zero5 = 0; zero5 < 50; zero5++) {
				if(sortedsht[newTable5.length + zero5] == null || sortedsht[newTable5.length + zero5] == undefined) {
					sortedsht[newTable5.length + zero5] = playerRows[shtSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers5()">Back</td><td id="forward100" class="header" onClick="loadOthers5()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		for(dupe5 = hundred; dupe5 < oneHundred; dupe5++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe5 + '">' + sortedsht[dupe5] + '</	tr>'
		}
		var f1 = dupe5 - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe5 + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthers5() {
	var dupe5
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers5()">Back</td><td id="forward100" class="header" onClick="loadOthers5()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupe5 = hundred; dupe5 < oneHundred; dupe5++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe5 + '">' + sortedsht[dupe5] + '</tr>'
	}
	var f1 = dupe5 - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe5 + ' of ' + NHLplayer.length
}

function reloadOthers5() {
	var dupe5
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers5()">Back</td><td id="forward100" class="header" onClick="loadOthers5()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupe5 = hundred; dupe5 < oneHundred; dupe5++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe5 + '">' + sortedsht[dupe5] + '</tr>'
	}
	var f1 = dupe5 - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe5 + ' of ' + NHLplayer.length
}

var sortedOveralls

function sortTableOverall() {
	if(sortOvrdown == false) {
		overallsOfPlayers = []
		for(funnyCounter2 = 0; funnyCounter2 < NHLplayer.length; funnyCounter2++) {
			overallsOfPlayers[overallsOfPlayers.length] = NHLplayer[funnyCounter2][3]
		}
		var overallSort, zero;
		sortedOveralls = []
		for(overallSort = 0; overallSort < NHLplayer.length; overallSort++) {
			var newTable = overallsOfPlayers.filter(sortOveralls)
			function sortOveralls(value) {
				return value > overallsOfPlayers[overallSort]
			}
			for(zero = 0; zero < 50; zero++) {
				if(sortedOveralls[newTable.length + zero] == null || sortedOveralls[newTable.length + zero] == undefined) {
					sortedOveralls[newTable.length + zero] = playerRows[overallSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers()">Back</td><td id="forward100" class="header" onClick="loadOthers()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupe
		for(dupe = hundred; dupe < oneHundred; dupe++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe + '">' + sortedOveralls[dupe] + '</tr>'
		}
		var f1 = dupe - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = true
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if(sortOvrdown == true) {
		overallsOfPlayers = []
		for(funnyCounter2 = 0; funnyCounter2 < NHLplayer.length; funnyCounter2++) {
			overallsOfPlayers[overallsOfPlayers.length] = NHLplayer[funnyCounter2][3]
		}
		var overallSort, zero;
		sortedOveralls = []
		for(overallSort = NHLplayer.length; overallSort > 0; overallSort--) {
			var newTable = overallsOfPlayers.filter(sortOveralls)
			function sortOveralls(value) {
				return value < overallsOfPlayers[overallSort]
			}
			for(zero = 0; zero < 50; zero++) {
				if(sortedOveralls[newTable.length + zero] == null || sortedOveralls[newTable.length + zero] == undefined) {
					sortedOveralls[newTable.length + zero] = playerRows[overallSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers()">Back</td><td id="forward100" class="header" onClick="loadOthers()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupe
		for(dupe = hundred; dupe < oneHundred; dupe++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe + '">' + sortedOveralls[dupe] + '</tr>'
		}
		var f1 = dupe - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthers() {
	var dupe
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers()">Back</td><td id="forward100" class="header" onClick="loadOthers()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupe = hundred; dupe < oneHundred; dupe++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe + '">' + sortedOveralls[dupe] + '</tr>'
	}
	var f1 = dupe - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe + ' of ' + NHLplayer.length
}

function reloadOthers() {
	var dupe
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers()">Back</td><td id="forward100" class="header" onClick="loadOthers()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupe = hundred; dupe < oneHundred; dupe++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe + '">' + sortedOveralls[dupe] + '</tr>'
	}
	var f1 = dupe - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe + ' of ' + NHLplayer.length
}



var sortedoiq

function sortTableoIQ() {
	if (sortoIQdown == false) {
		oiqOfPlayers = []
		for(funnyCounter4 = 0; funnyCounter4 < NHLplayer.length; funnyCounter4++) {
			oiqOfPlayers[oiqOfPlayers.length] = NHLplayer[funnyCounter4][6]
		}
		var oiqSort, zero3;
		sortedoiq = []
		for(oiqSort = 0; oiqSort < NHLplayer.length; oiqSort++) {
			var newTable3 = oiqOfPlayers.filter(sortoiq)
			function sortoiq(value) {
				return value > oiqOfPlayers[oiqSort]
			}
			for(zero3 = 0; zero3 < 50; zero3++) {
				if(sortedoiq[newTable3.length + zero3] == null || sortedoiq[newTable3.length + zero3] == undefined) {
					sortedoiq[newTable3.length + zero3] = playerRows[oiqSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers3()">Back</td><td id="forward100" class="header" onClick="loadOthers3()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupe3
		for(dupe3 = hundred; dupe3 < oneHundred; dupe3++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe3 + '">' + sortedoiq[dupe3] + '</tr>'
		}
		var f1 = dupe3 - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe3 + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = true
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortoIQdown == true) {
		oiqOfPlayers = []
		for(funnyCounter4 = 0; funnyCounter4 < NHLplayer.length; funnyCounter4++) {
			oiqOfPlayers[oiqOfPlayers.length] = NHLplayer[funnyCounter4][6]
		}
		var oiqSort, zero3;
		sortedoiq = []
		for(oiqSort = NHLplayer.length; oiqSort > 0; oiqSort--) {
			var newTable3 = oiqOfPlayers.filter(sortoiq)
			function sortoiq(value) {
				return value < oiqOfPlayers[oiqSort]
			}
			for(zero3 = 0; zero3 < 50; zero3++) {
				if(sortedoiq[newTable3.length + zero3] == null || sortedoiq[newTable3.length + zero3] == undefined) {
					sortedoiq[newTable3.length + zero3] = playerRows[oiqSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers3()">Back</td><td id="forward100" class="header" onClick="loadOthers3()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupe3
		for(dupe3 = hundred; dupe3 < oneHundred; dupe3++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe3 + '">' + sortedoiq[dupe3] + '</tr>'
		}
		var f1 = dupe3 - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe3 + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthers3() {
	var dupe3
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers3()">Back</td><td id="forward100" class="header" onClick="loadOthers3()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupe3 = hundred; dupe3 < oneHundred; dupe3++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe3 + '">' + sortedoiq[dupe3] + '</tr>'
	}
	var f1 = dupe3 - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe3 + ' of ' + NHLplayer.length
}

function reloadOthers3() {
	var dupe3
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers3()">Back</td><td id="forward100" class="header" onClick="loadOthers3()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupe3 = hundred; dupe3 < oneHundred; dupe3++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe3 + '">' + sortedoiq[dupe3] + '</tr>'
	}
	var f1 = dupe3 - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe3 + ' of ' + NHLplayer.length
}



var sortedPotentials

function sortTablePotential() {
	if (sortPotdown == false) {
		potentialsOfPlayers = []
		for(funnyCounter3 = 0; funnyCounter3 < NHLplayer.length; funnyCounter3++) {
			potentialsOfPlayers[potentialsOfPlayers.length] = NHLplayer[funnyCounter3][5]
		}
		var potentialSort, zero2;
		sortedPotentials = []
		for(potentialSort = 0; potentialSort < NHLplayer.length; potentialSort++) {
			var newTable = potentialsOfPlayers.filter(sortPotentials)
			function sortPotentials(value) {
				return value > potentialsOfPlayers[potentialSort]
			}
			for(zero2 = 0; zero2 < 50; zero2++) {
				if(sortedPotentials[newTable.length + zero2] == null || sortedPotentials[newTable.length + zero2] == 	undefined) {
					sortedPotentials[newTable.length + zero2] = playerRows[potentialSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers2()">Back</td><td id="forward100" class="header" onClick="loadOthers2()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupe2
		for(dupe2 = hundred; dupe2 < oneHundred; dupe2++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe2 + '">' + sortedPotentials[dupe2] + '</tr>'
		}
		var f1 = dupe2 - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe2 + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = true
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortPotdown == true) {
		potentialsOfPlayers = []
		for(funnyCounter3 = 0; funnyCounter3 < NHLplayer.length; funnyCounter3++) {
			potentialsOfPlayers[potentialsOfPlayers.length] = NHLplayer[funnyCounter3][5]
		}
		var potentialSort, zero2;
		sortedPotentials = []
		for(potentialSort = NHLplayer.length; potentialSort > 0; potentialSort--) {
			var newTable = potentialsOfPlayers.filter(sortPotentials)
			function sortPotentials(value) {
				return value < potentialsOfPlayers[potentialSort]
			}
			for(zero2 = 0; zero2 < 50; zero2++) {
				if(sortedPotentials[newTable.length + zero2] == null || sortedPotentials[newTable.length + zero2] == 	undefined) {
					sortedPotentials[newTable.length + zero2] = playerRows[potentialSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers2()">Back</td><td id="forward100" class="header" onClick="loadOthers2()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupe2
		for(dupe2 = hundred; dupe2 < oneHundred; dupe2++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe2 + '">' + sortedPotentials[dupe2] + '</tr>'
		}
		var f1 = dupe2 - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe2 + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthers2() {
	var dupe2
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers2()">Back</td><td id="forward100" class="header" onClick="loadOthers2()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupe2 = hundred; dupe2 < oneHundred; dupe2++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe2 + '">' + sortedPotentials[dupe2] + '</tr>'
	}
	var f1 = dupe2 - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe2 + ' of ' + NHLplayer.length
}

function reloadOthers2() {
	var dupe2
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers2()">Back</td><td id="forward100" class="header" onClick="loadOthers2()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupe2 = hundred; dupe2 < oneHundred; dupe2++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe2 + '">' + sortedPotentials[dupe2] + '</tr>'
	}
	var f1 = dupe2 - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe2 + ' of ' + NHLplayer.length
}

var sortedAge

function sortTableAge() {
	if (sortAgedown == false) {
		ageOfPlayers = []
		for(funnyCounter6 = 0; funnyCounter6 < NHLplayer.length; funnyCounter6++) {
			ageOfPlayers[ageOfPlayers.length] = NHLplayer[funnyCounter6][2]
		}
		var ageSort, zero6;
		sortedAge = []
		for(ageSort = 0; ageSort < NHLplayer.length; ageSort++) {
			var newTable6 = ageOfPlayers.filter(sortAge)
			function sortAge(value) {
				return value > ageOfPlayers[ageSort]
			}
			for(zero6 = 0; zero6 < 50; zero6++) {
				if(sortedAge[newTable6.length + zero6] == null || sortedAge[newTable6.length + zero6] == undefined) {
					sortedAge[newTable6.length + zero6] = playerRows[ageSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers6()">Back</td><td id="forward100" class="header" onClick="loadOthers6()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupe6
		for(dupe6 = hundred; dupe6 < oneHundred; dupe6++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe6 + '">' + sortedAge[dupe6] + '</	tr>'
		}
		var f1 = dupe6 - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe6 + ' of ' + NHLplayer.length
		sortAgedown = true
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortAgedown == true) {
		ageOfPlayers = []
		for(funnyCounter6 = 0; funnyCounter6 < NHLplayer.length; funnyCounter6++) {
			ageOfPlayers[ageOfPlayers.length] = NHLplayer[funnyCounter6][2]
		}
		var ageSort, zero6;
		sortedAge = []
		for(ageSort = NHLplayer.length; ageSort > 0; ageSort--) {
			var newTable6 = ageOfPlayers.filter(sortAge)
			function sortAge(value) {
				return value < ageOfPlayers[ageSort]
			}
			for(zero6 = 0; zero6 < 50; zero6++) {
				if(sortedAge[newTable6.length + zero6] == null || sortedAge[newTable6.length + zero6] == undefined) {
					sortedAge[newTable6.length + zero6] = playerRows[ageSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers6()">Back</td><td id="forward100" class="header" onClick="loadOthers6()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupe6
		for(dupe6 = hundred; dupe6 < oneHundred; dupe6++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe6 + '">' + sortedAge[dupe6] + '</tr>'
		}
		var f1 = dupe6 - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe6 + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthers6() {
	var dupe6
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers6()">Back</td><td id="forward100" class="header" onClick="loadOthers6()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupe6 = hundred; dupe6 < oneHundred; dupe6++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe6 + '">' + sortedAge[dupe6] + '</tr>'
	}
	var f1 = dupe6 - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe6 + ' of ' + NHLplayer.length
}

function reloadOthers6() {
	var dupe6
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthers6()">Back</td><td id="forward100" class="header" onClick="loadOthers6()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupe6 = hundred; dupe6 < oneHundred; dupe6++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupe6 + '">' + sortedAge[dupe6] + '</tr>'
	}
	var f1 = dupe6 - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupe6 + ' of ' + NHLplayer.length
}

var sortedPassAcc

function sortTablePassAcc() {
	if (sortPacdown == false) {
		PassAccOfPlayers = []
		for(funnyCountera = 0; funnyCountera < NHLplayer.length; funnyCountera++) {
			PassAccOfPlayers[PassAccOfPlayers.length] = NHLplayer[funnyCountera][10]
		}
		var PassAccSort, zeroa;
		sortedPassAcc = []
		for(PassAccSort = 0; PassAccSort < NHLplayer.length; PassAccSort++) {
			var newTablea = PassAccOfPlayers.filter(sortPassAcc)
			function sortPassAcc(value) {
				return value > PassAccOfPlayers[PassAccSort]
			}
			for(zeroa = 0; zeroa < 50; zeroa++) {
				if(sortedPassAcc[newTablea.length + zeroa] == null || sortedPassAcc[newTablea.length + zeroa] == undefined) {
					sortedPassAcc[newTablea.length + zeroa] = playerRows[PassAccSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersa()">Back</td><td id="forward100" class="header" onClick="loadOthersa()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupea
		for(dupea = hundred; dupea < oneHundred; dupea++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupea + '">' + sortedPassAcc[dupea] + '</tr>'
		}
		var f1 = dupea - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupea + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = true
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortPacdown == true) {
		PassAccOfPlayers = []
		for(funnyCountera = 0; funnyCountera < NHLplayer.length; funnyCountera++) {
			PassAccOfPlayers[PassAccOfPlayers.length] = NHLplayer[funnyCountera][10]
		}
		var PassAccSort, zeroa;
		sortedPassAcc = []
		for(PassAccSort = NHLplayer.length; PassAccSort > 0; PassAccSort--) {
			var newTablea = PassAccOfPlayers.filter(sortPassAcc)
			function sortPassAcc(value) {
				return value < PassAccOfPlayers[PassAccSort]
			}
			for(zeroa = 0; zeroa < 50; zeroa++) {
				if(sortedPassAcc[newTablea.length + zeroa] == null || sortedPassAcc[newTablea.length + zeroa] == undefined) {
					sortedPassAcc[newTablea.length + zeroa] = playerRows[PassAccSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersa()">Back</td><td id="forward100" class="header" onClick="loadOthersa()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupea
		for(dupea = hundred; dupea < oneHundred; dupea++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupea + '">' + sortedPassAcc[dupea] + '</tr>'
		}
		var f1 = dupea - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupea + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthersa() {
	var dupea
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersa()">Back</td><td id="forward100" class="header" onClick="loadOthersa()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupea = hundred; dupea < oneHundred; dupea++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupea + '">' + sortedPassAcc[dupea] + '</tr>'
	}
	var f1 = dupea - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupea + ' of ' + NHLplayer.length
}

function reloadOthersa() {
	var dupea
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersa()">Back</td><td id="forward100" class="header" onClick="loadOthersa()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupea = hundred; dupea < oneHundred; dupea++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupea + '">' + sortedPassAcc[dupea] + '</tr>'
	}
	var f1 = dupea - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupea + ' of ' + NHLplayer.length
}

var sortedPass

function sortTablePass() {
	if (sortPasdown == false) {
		PassOfPlayers = []
		for(funnyCounterb = 0; funnyCounterb < NHLplayer.length; funnyCounterb++) {
			PassOfPlayers[PassOfPlayers.length] = NHLplayer[funnyCounterb][9]
		}
		var PassSort, zerob;
		sortedPass = []
		for(PassSort = 0; PassSort < NHLplayer.length; PassSort++) {
			var newTableb = PassOfPlayers.filter(sortPass)
			function sortPass(value) {
				return value > PassOfPlayers[PassSort]
			}
			for(zerob = 0; zerob < 50; zerob++) {
				if(sortedPass[newTableb.length + zerob] == null || sortedPass[newTableb.length + zerob] == undefined) {
					sortedPass[newTableb.length + zerob] = playerRows[PassSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersb()">Back</td><td id="forward100" class="header" onClick="loadOthersb()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupeb
		for(dupeb = hundred; dupeb < oneHundred; dupeb++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeb + '">' + sortedPass[dupeb] + '</tr>'
		}
		var f1 = dupeb - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeb + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = true
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortPasdown == true) {
		PassOfPlayers = []
		for(funnyCounterb = 0; funnyCounterb < NHLplayer.length; funnyCounterb++) {
			PassOfPlayers[PassOfPlayers.length] = NHLplayer[funnyCounterb][9]
		}
		var PassSort, zerob;
		sortedPass = []
		for(PassSort = NHLplayer.length; PassSort > 0; PassSort--) {
			var newTableb = PassOfPlayers.filter(sortPass)
			function sortPass(value) {
				return value < PassOfPlayers[PassSort]
			}
			for(zerob = 0; zerob < 50; zerob++) {
				if(sortedPass[newTableb.length + zerob] == null || sortedPass[newTableb.length + zerob] == undefined) {
					sortedPass[newTableb.length + zerob] = playerRows[PassSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersb()">Back</td><td id="forward100" class="header" onClick="loadOthersb()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupeb
		for(dupeb = hundred; dupeb < oneHundred; dupeb++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeb + '">' + sortedPass[dupeb] + '</tr>'
		}
		var f1 = dupeb - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeb + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthersb() {
	var dupeb
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersb()">Back</td><td id="forward100" class="header" onClick="loadOthersb()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupeb = hundred; dupeb < oneHundred; dupeb++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeb + '">' + sortedPass[dupeb] + '</tr>'
	}
	var f1 = dupeb - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeb + ' of ' + NHLplayer.length
}

function reloadOthersb() {
	var dupeb
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersb()">Back</td><td id="forward100" class="header" onClick="loadOthersb()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupeb = hundred; dupeb < oneHundred; dupeb++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeb + '">' + sortedPass[dupeb] + '</tr>'
	}
	var f1 = dupeb - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeb + ' of ' + NHLplayer.length
}


var sorteddIQ

function sortTabledIQ() {
	if (sortdIQdown == false) {
		dIQOfPlayers = []
		for(funnyCounterc = 0; funnyCounterc < NHLplayer.length; funnyCounterc++) {
			dIQOfPlayers[dIQOfPlayers.length] = NHLplayer[funnyCounterc][11]
		}
		var dIQSort, zeroc;
		sorteddIQ = []
		for(dIQSort = 0; dIQSort < NHLplayer.length; dIQSort++) {
			var newTablec = dIQOfPlayers.filter(sortdIQ)
			function sortdIQ(value) {
				return value > dIQOfPlayers[dIQSort]
			}
			for(zeroc = 0; zeroc < 50; zeroc++) {
				if(sorteddIQ[newTablec.length + zeroc] == null || sorteddIQ[newTablec.length + zeroc] == undefined) {
					sorteddIQ[newTablec.length + zeroc] = playerRows[dIQSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersc()">Back</td><td id="forward100" class="header" onClick="loadOthersc()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupec
		for(dupec = hundred; dupec < oneHundred; dupec++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupec + '">' + sorteddIQ[dupec] + '</tr>'
		}
		var f1 = dupec - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupec + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = true
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortdIQdown == true) {
		dIQOfPlayers = []
		for(funnyCounterc = 0; funnyCounterc < NHLplayer.length; funnyCounterc++) {
			dIQOfPlayers[dIQOfPlayers.length] = NHLplayer[funnyCounterc][11]
		}
		var dIQSort, zeroc;
		sorteddIQ = []
		for(dIQSort = NHLplayer.length; dIQSort > 0; dIQSort--) {
			var newTablec = dIQOfPlayers.filter(sortdIQ)
			function sortdIQ(value) {
				return value < dIQOfPlayers[dIQSort]
			}
			for(zeroc = 0; zeroc < 50; zeroc++) {
				if(sorteddIQ[newTablec.length + zeroc] == null || sorteddIQ[newTablec.length + zeroc] == undefined) {
					sorteddIQ[newTablec.length + zeroc] = playerRows[dIQSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersc()">Back</td><td id="forward100" class="header" onClick="loadOthersc()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupec
		for(dupec = hundred; dupec < oneHundred; dupec++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupec + '">' + sorteddIQ[dupec] + '</tr>'
		}
		var f1 = dupec - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupec + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthersc() {
	var dupec
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersc()">Back</td><td id="forward100" class="header" onClick="loadOthersc()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupec = hundred; dupec < oneHundred; dupec++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupec + '">' + sorteddIQ[dupec] + '</tr>'
	}
	var f1 = dupec - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupec + ' of ' + NHLplayer.length
}

function reloadOthersc() {
	var dupec
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersc()">Back</td><td id="forward100" class="header" onClick="loadOthersc()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupec = hundred; dupec < oneHundred; dupec++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupec + '">' + sorteddIQ[dupec] + '</tr>'
	}
	var f1 = dupec - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupec + ' of ' + NHLplayer.length
}

var sortedShotBlk

function sortTableShotBlk() {
	if (sortSbkdown == false) {
		ShotBlkOfPlayers = []
		for(funnyCounterd = 0; funnyCounterd < NHLplayer.length; funnyCounterd++) {
			ShotBlkOfPlayers[ShotBlkOfPlayers.length] = NHLplayer[funnyCounterd][13]
		}
		var ShotBlkSort, zerod;
		sortedShotBlk = []
		for(ShotBlkSort = 0; ShotBlkSort < NHLplayer.length; ShotBlkSort++) {
			var newTabled = ShotBlkOfPlayers.filter(sortShotBlk)
			function sortShotBlk(value) {
				return value > ShotBlkOfPlayers[ShotBlkSort]
			}
			for(zerod = 0; zerod < 50; zerod++) {
				if(sortedShotBlk[newTabled.length + zerod] == null || sortedShotBlk[newTabled.length + zerod] == undefined) {
					sortedShotBlk[newTabled.length + zerod] = playerRows[ShotBlkSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersd()">Back</td><td id="forward100" class="header" onClick="loadOthersd()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var duped
		for(duped = hundred; duped < oneHundred; duped++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + duped + '">' + sortedShotBlk[duped] + '</tr>'
		}
		var f1 = duped - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + duped + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = true
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortSbkdown == true) {
		ShotBlkOfPlayers = []
		for(funnyCounterd = 0; funnyCounterd < NHLplayer.length; funnyCounterd++) {
			ShotBlkOfPlayers[ShotBlkOfPlayers.length] = NHLplayer[funnyCounterd][13]
		}
		var ShotBlkSort, zerod;
		sortedShotBlk = []
		for(ShotBlkSort = NHLplayer.length; ShotBlkSort > 0; ShotBlkSort--) {
			var newTabled = ShotBlkOfPlayers.filter(sortShotBlk)
			function sortShotBlk(value) {
				return value < ShotBlkOfPlayers[ShotBlkSort]
			}
			for(zerod = 0; zerod < 50; zerod++) {
				if(sortedShotBlk[newTabled.length + zerod] == null || sortedShotBlk[newTabled.length + zerod] == undefined) {
					sortedShotBlk[newTabled.length + zerod] = playerRows[ShotBlkSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersd()">Back</td><td id="forward100" class="header" onClick="loadOthersd()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var duped
		for(duped = hundred; duped < oneHundred; duped++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + duped + '">' + sortedShotBlk[duped] + '</tr>'
		}
		var f1 = duped - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + duped + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthersd() {
	var duped
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersd()">Back</td><td id="forward100" class="header" onClick="loadOthersd()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(duped = hundred; duped < oneHundred; duped++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + duped + '">' + sortedShotBlk[duped] + '</tr>'
	}
	var f1 = duped - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + duped + ' of ' + NHLplayer.length
}

function reloadOthersd() {
	var duped
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersd()">Back</td><td id="forward100" class="header" onClick="loadOthersd()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(duped = hundred; duped < oneHundred; duped++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + duped + '">' + sortedShotBlk[duped] + '</tr>'
	}
	var f1 = duped - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + duped + ' of ' + NHLplayer.length
}

var sortedBkay

function sortTableBkay() {
	if (sortBkydown == false) {
		BkayOfPlayers = []
		for(funnyCountere = 0; funnyCountere < NHLplayer.length; funnyCountere++) {
			BkayOfPlayers[BkayOfPlayers.length] = NHLplayer[funnyCountere][24]
		}
		var BkaySort, zeroe;
		sortedBkay = []
		for(BkaySort = 0; BkaySort < NHLplayer.length; BkaySort++) {
			var newTablee = BkayOfPlayers.filter(sortBkay)
			function sortBkay(value) {
				return value > BkayOfPlayers[BkaySort]
			}
			for(zeroe = 0; zeroe < 50; zeroe++) {
				if(sortedBkay[newTablee.length + zeroe] == null || sortedBkay[newTablee.length + zeroe] == undefined) {
					sortedBkay[newTablee.length + zeroe] = playerRows[BkaySort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOtherse()">Back</td><td id="forward100" class="header" onClick="loadOtherse()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupee
		for(dupee = hundred; dupee < oneHundred; dupee++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupee + '">' + sortedBkay[dupee] + '</tr>'
		}
		var f1 = dupee - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupee + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = true
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortBkydown == true) {
		BkayOfPlayers = []
		for(funnyCountere = 0; funnyCountere < NHLplayer.length; funnyCountere++) {
			BkayOfPlayers[BkayOfPlayers.length] = NHLplayer[funnyCountere][24]
		}
		var BkaySort, zeroe;
		sortedBkay = []
		for(BkaySort = NHLplayer.length; BkaySort > 0; BkaySort--) {
			var newTablee = BkayOfPlayers.filter(sortBkay)
			function sortBkay(value) {
				return value < BkayOfPlayers[BkaySort]
			}
			for(zeroe = 0; zeroe < 50; zeroe++) {
				if(sortedBkay[newTablee.length + zeroe] == null || sortedBkay[newTablee.length + zeroe] == undefined) {
					sortedBkay[newTablee.length + zeroe] = playerRows[BkaySort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOtherse()">Back</td><td id="forward100" class="header" onClick="loadOtherse()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupee
		for(dupee = hundred; dupee < oneHundred; dupee++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupee + '">' + sortedBkay[dupee] + '</tr>'
		}
		var f1 = dupee - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupee + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOtherse() {
	var dupee
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOtherse()">Back</td><td id="forward100" class="header" onClick="loadOtherse()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupee = hundred; dupee < oneHundred; dupee++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupee + '">' + sortedBkay[dupee] + '</tr>'
	}
	var f1 = dupee - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupee + ' of ' + NHLplayer.length
}

function reloadOtherse() {
	var dupee
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOtherse()">Back</td><td id="forward100" class="header" onClick="loadOtherse()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupee = hundred; dupee < oneHundred; dupee++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupee + '">' + sortedBkay[dupee] + '</tr>'
	}
	var f1 = dupee - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupee + ' of ' + NHLplayer.length
}

var sortedReb

function sortTableReb() {
	if (sortRebdown == false) {
		RebOfPlayers = []
		for(funnyCounterf = 0; funnyCounterf < NHLplayer.length; funnyCounterf++) {
			RebOfPlayers[RebOfPlayers.length] = NHLplayer[funnyCounterf][12]
		}
		var RebSort, zerof;
		sortedReb = []
		for(RebSort = 0; RebSort < NHLplayer.length; RebSort++) {
			var newTablef = RebOfPlayers.filter(sortReb)
			function sortReb(value) {
				return value > RebOfPlayers[RebSort]
			}
			for(zerof = 0; zerof < 50; zerof++) {
				if(sortedReb[newTablef.length + zerof] == null || sortedReb[newTablef.length + zerof] == undefined) {
					sortedReb[newTablef.length + zerof] = playerRows[RebSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersf()">Back</td><td id="forward100" class="header" onClick="loadOthersf()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupef
		for(dupef = hundred; dupef < oneHundred; dupef++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupef + '">' + sortedReb[dupef] + '</tr>'
		}
		var f1 = dupef - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupef + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = true
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortRebdown == true) {
		RebOfPlayers = []
		for(funnyCounterf = 0; funnyCounterf < NHLplayer.length; funnyCounterf++) {
			RebOfPlayers[RebOfPlayers.length] = NHLplayer[funnyCounterf][12]
		}
		var RebSort, zerof;
		sortedReb = []
		for(RebSort = NHLplayer.length; RebSort > 0; RebSort--) {
			var newTablef = RebOfPlayers.filter(sortReb)
			function sortReb(value) {
				return value < RebOfPlayers[RebSort]
			}
			for(zerof = 0; zerof < 50; zerof++) {
				if(sortedReb[newTablef.length + zerof] == null || sortedReb[newTablef.length + zerof] == undefined) {
					sortedReb[newTablef.length + zerof] = playerRows[RebSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersf()">Back</td><td id="forward100" class="header" onClick="loadOthersf()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupef
		for(dupef = hundred; dupef < oneHundred; dupef++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupef + '">' + sortedReb[dupef] + '</tr>'
		}
		var f1 = dupef - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupef + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthersf() {
	var dupef
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersf()">Back</td><td id="forward100" class="header" onClick="loadOthersf()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupef = hundred; dupef < oneHundred; dupef++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupef + '">' + sortedReb[dupef] + '</tr>'
	}
	var f1 = dupef - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupef + ' of ' + NHLplayer.length
}

function reloadOthersf() {
	var dupef
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersf()">Back</td><td id="forward100" class="header" onClick="loadOthersf()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupef = hundred; dupef < oneHundred; dupef++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupef + '">' + sortedReb[dupef] + '</tr>'
	}
	var f1 = dupef - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupef + ' of ' + NHLplayer.length
}


var sortedStl

function sortTableStl() {
	if (sortStldown == false) {
		StlOfPlayers = []
		for(funnyCounterg = 0; funnyCounterg < NHLplayer.length; funnyCounterg++) {
			StlOfPlayers[StlOfPlayers.length] = NHLplayer[funnyCounterg][25]
		}
		var StlSort, zerog;
		sortedStl = []
		for(StlSort = 0; StlSort < NHLplayer.length; StlSort++) {
			var newTableg = StlOfPlayers.filter(sortStl)
			function sortStl(value) {
				return value > StlOfPlayers[StlSort]
			}
			for(zerog = 0; zerog < 50; zerog++) {
				if(sortedStl[newTableg.length + zerog] == null || sortedStl[newTableg.length + zerog] == undefined) {
					sortedStl[newTableg.length + zerog] = playerRows[StlSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersg()">Back</td><td id="forward100" class="header" onClick="loadOthersg()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupeg
		for(dupeg = hundred; dupeg < oneHundred; dupeg++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeg + '">' + sortedStl[dupeg] + '</tr>'
		}
		var f1 = dupeg - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeg + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = true
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortStldown == true) {
		StlOfPlayers = []
		for(funnyCounterg = 0; funnyCounterg < NHLplayer.length; funnyCounterg++) {
			StlOfPlayers[StlOfPlayers.length] = NHLplayer[funnyCounterg][25]
		}
		var StlSort, zerog;
		sortedStl = []
		for(StlSort = NHLplayer.length; StlSort > 0; StlSort--) {
			var newTableg = StlOfPlayers.filter(sortStl)
			function sortStl(value) {
				return value < StlOfPlayers[StlSort]
			}
			for(zerog = 0; zerog < 50; zerog++) {
				if(sortedStl[newTableg.length + zerog] == null || sortedStl[newTableg.length + zerog] == undefined) {
					sortedStl[newTableg.length + zerog] = playerRows[StlSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersg()">Back</td><td id="forward100" class="header" onClick="loadOthersg()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupeg
		for(dupeg = hundred; dupeg < oneHundred; dupeg++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeg + '">' + sortedStl[dupeg] + '</tr>'
		}
		var f1 = dupeg - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeg + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthersg() {
	var dupeg
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersg()">Back</td><td id="forward100" class="header" onClick="loadOthersg()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupeg = hundred; dupeg < oneHundred; dupeg++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeg + '">' + sortedStl[dupeg] + '</tr>'
	}
	var f1 = dupeg - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeg + ' of ' + NHLplayer.length
}

function reloadOthersg() {
	var dupeg
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersg()">Back</td><td id="forward100" class="header" onClick="loadOthersg()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupeg = hundred; dupeg < oneHundred; dupeg++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeg + '">' + sortedStl[dupeg] + '</tr>'
	}
	var f1 = dupeg - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeg + ' of ' + NHLplayer.length
}

var sortedChk

function sortTableChk() {
	if (sortChkdown == false) {
		ChkOfPlayers = []
		for(funnyCounterh = 0; funnyCounterh < NHLplayer.length; funnyCounterh++) {
			ChkOfPlayers[ChkOfPlayers.length] = NHLplayer[funnyCounterh][15]
		}
		var ChkSort, zeroh;
		sortedChk = []
		for(ChkSort = 0; ChkSort < NHLplayer.length; ChkSort++) {
			var newTableh = ChkOfPlayers.filter(sortChk)
			function sortChk(value) {
				return value > ChkOfPlayers[ChkSort]
			}
			for(zeroh = 0; zeroh < 50; zeroh++) {
				if(sortedChk[newTableh.length + zeroh] == null || sortedChk[newTableh.length + zeroh] == undefined) {
					sortedChk[newTableh.length + zeroh] = playerRows[ChkSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersh()">Back</td><td id="forward100" class="header" onClick="loadOthersh()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupeh
		for(dupeh = hundred; dupeh < oneHundred; dupeh++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeh + '">' + sortedChk[dupeh] + '</tr>'
		}
		var f1 = dupeh - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeh + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = true
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortChkdown == true) {
		ChkOfPlayers = []
		for(funnyCounterh = 0; funnyCounterh < NHLplayer.length; funnyCounterh++) {
			ChkOfPlayers[ChkOfPlayers.length] = NHLplayer[funnyCounterh][15]
		}
		var ChkSort, zeroh;
		sortedChk = []
		for(ChkSort = NHLplayer.length; ChkSort > 0; ChkSort--) {
			var newTableh = ChkOfPlayers.filter(sortChk)
			function sortChk(value) {
				return value < ChkOfPlayers[ChkSort]
			}
			for(zeroh = 0; zeroh < 50; zeroh++) {
				if(sortedChk[newTableh.length + zeroh] == null || sortedChk[newTableh.length + zeroh] == undefined) {
					sortedChk[newTableh.length + zeroh] = playerRows[ChkSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersh()">Back</td><td id="forward100" class="header" onClick="loadOthersh()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupeh
		for(dupeh = hundred; dupeh < oneHundred; dupeh++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeh + '">' + sortedChk[dupeh] + '</tr>'
		}
		var f1 = dupeh - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeh + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthersh() {
	var dupeh
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersh()">Back</td><td id="forward100" class="header" onClick="loadOthersh()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupeh = hundred; dupeh < oneHundred; dupeh++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeh + '">' + sortedChk[dupeh] + '</tr>'
	}
	var f1 = dupeh - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeh + ' of ' + NHLplayer.length
}

function reloadOthersh() {
	var dupeh
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersh()">Back</td><td id="forward100" class="header" onClick="loadOthersh()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupeh = hundred; dupeh < oneHundred; dupeh++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeh + '">' + sortedChk[dupeh] + '</tr>'
	}
	var f1 = dupeh - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeh + ' of ' + NHLplayer.length
}

var sortedStg

function sortTableStg() {
	if (sortStgdown == false) {
		StgOfPlayers = []
		for(funnyCounteri = 0; funnyCounteri < NHLplayer.length; funnyCounteri++) {
			StgOfPlayers[StgOfPlayers.length] = NHLplayer[funnyCounteri][14]
		}
		var StgSort, zeroi;
		sortedStg = []
		for(StgSort = 0; StgSort < NHLplayer.length; StgSort++) {
			var newTablei = StgOfPlayers.filter(sortStg)
			function sortStg(value) {
				return value > StgOfPlayers[StgSort]
			}
			for(zeroi = 0; zeroi < 50; zeroi++) {
				if(sortedStg[newTablei.length + zeroi] == null || sortedStg[newTablei.length + zeroi] == undefined) {
					sortedStg[newTablei.length + zeroi] = playerRows[StgSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersi()">Back</td><td id="forward100" class="header" onClick="loadOthersi()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupei
		for(dupei = hundred; dupei < oneHundred; dupei++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupei + '">' + sortedStg[dupei] + '</tr>'
		}
		var f1 = dupei - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupei + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = true
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortStgdown == true) {
		StgOfPlayers = []
		for(funnyCounteri = 0; funnyCounteri < NHLplayer.length; funnyCounteri++) {
			StgOfPlayers[StgOfPlayers.length] = NHLplayer[funnyCounteri][14]
		}
		var StgSort, zeroi;
		sortedStg = []
		for(StgSort = NHLplayer.length; StgSort > 0; StgSort--) {
			var newTablei = StgOfPlayers.filter(sortStg)
			function sortStg(value) {
				return value < StgOfPlayers[StgSort]
			}
			for(zeroi = 0; zeroi < 50; zeroi++) {
				if(sortedStg[newTablei.length + zeroi] == null || sortedStg[newTablei.length + zeroi] == undefined) {
					sortedStg[newTablei.length + zeroi] = playerRows[StgSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersi()">Back</td><td id="forward100" class="header" onClick="loadOthersi()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupei
		for(dupei = hundred; dupei < oneHundred; dupei++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupei + '">' + sortedStg[dupei] + '</tr>'
		}
		var f1 = dupei - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupei + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthersi() {
	var dupei
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersi()">Back</td><td id="forward100" class="header" onClick="loadOthersi()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupei = hundred; dupei < oneHundred; dupei++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupei + '">' + sortedStg[dupei] + '</tr>'
	}
	var f1 = dupei - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupei + ' of ' + NHLplayer.length
}

function reloadOthersi() {
	var dupei
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersi()">Back</td><td id="forward100" class="header" onClick="loadOthersi()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupei = hundred; dupei < oneHundred; dupei++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupei + '">' + sortedStg[dupei] + '</tr>'
	}
	var f1 = dupei - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupei + ' of ' + NHLplayer.length
}

var sortedFoff

function sortTableFoff() {
	if (sortFofdown == false) {
		FoffOfPlayers = []
		for(funnyCounterj = 0; funnyCounterj < NHLplayer.length; funnyCounterj++) {
			FoffOfPlayers[FoffOfPlayers.length] = NHLplayer[funnyCounterj][16]
		}
		var FoffSort, zeroj;
		sortedFoff = []
		for(FoffSort = 0; FoffSort < NHLplayer.length; FoffSort++) {
			var newTablej = FoffOfPlayers.filter(sortFoff)
			function sortFoff(value) {
				return value > FoffOfPlayers[FoffSort]
			}
			for(zeroj = 0; zeroj < 50; zeroj++) {
				if(sortedFoff[newTablej.length + zeroj] == null || sortedFoff[newTablej.length + zeroj] == undefined) {
					sortedFoff[newTablej.length + zeroj] = playerRows[FoffSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersj()">Back</td><td id="forward100" class="header" onClick="loadOthersj()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupej
		for(dupej = hundred; dupej < oneHundred; dupej++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupej + '">' + sortedFoff[dupej] + '</tr>'
		}
		var f1 = dupej - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupej + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = true
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortFofdown == true) {
		FoffOfPlayers = []
		for(funnyCounterj = 0; funnyCounterj < NHLplayer.length; funnyCounterj++) {
			FoffOfPlayers[FoffOfPlayers.length] = NHLplayer[funnyCounterj][16]
		}
		var FoffSort, zeroj;
		sortedFoff = []
		for(FoffSort = NHLplayer.length; FoffSort > 0; FoffSort--) {
			var newTablej = FoffOfPlayers.filter(sortFoff)
			function sortFoff(value) {
				return value < FoffOfPlayers[FoffSort]
			}
			for(zeroj = 0; zeroj < 50; zeroj++) {
				if(sortedFoff[newTablej.length + zeroj] == null || sortedFoff[newTablej.length + zeroj] == undefined) {
					sortedFoff[newTablej.length + zeroj] = playerRows[FoffSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersj()">Back</td><td id="forward100" class="header" onClick="loadOthersj()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupej
		for(dupej = hundred; dupej < oneHundred; dupej++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupej + '">' + sortedFoff[dupej] + '</tr>'
		}
		var f1 = dupej - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupej + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthersj() {
	var dupej
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersj()">Back</td><td id="forward100" class="header" onClick="loadOthersj()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupej = hundred; dupej < oneHundred; dupej++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupej + '">' + sortedFoff[dupej] + '</tr>'
	}
	var f1 = dupej - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupej + ' of ' + NHLplayer.length
}

function reloadOthersj() {
	var dupej
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersj()">Back</td><td id="forward100" class="header" onClick="loadOthersj()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupej = hundred; dupej < oneHundred; dupej++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupej + '">' + sortedFoff[dupej] + '</tr>'
	}
	var f1 = dupej - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupej + ' of ' + NHLplayer.length
}

var sortedSpd

function sortTableSpd() {
	if (sortSpddown == false) {
		SpdOfPlayers = []
		for(funnyCounterk = 0; funnyCounterk < NHLplayer.length; funnyCounterk++) {
			SpdOfPlayers[SpdOfPlayers.length] = NHLplayer[funnyCounterk][17]
		}
		var SpdSort, zerok;
		sortedSpd = []
		for(SpdSort = 0; SpdSort < NHLplayer.length; SpdSort++) {
			var newTablek = SpdOfPlayers.filter(sortSpd)
			function sortSpd(value) {
				return value > SpdOfPlayers[SpdSort]
			}
			for(zerok = 0; zerok < 50; zerok++) {
				if(sortedSpd[newTablek.length + zerok] == null || sortedSpd[newTablek.length + zerok] == undefined) {
					sortedSpd[newTablek.length + zerok] = playerRows[SpdSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersk()">Back</td><td id="forward100" class="header" onClick="loadOthersk()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupek
		for(dupek = hundred; dupek < oneHundred; dupek++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupek + '">' + sortedSpd[dupek] + '</tr>'
		}
		var f1 = dupek - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupek + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = true
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortSpddown == true) {
		SpdOfPlayers = []
		for(funnyCounterk = 0; funnyCounterk < NHLplayer.length; funnyCounterk++) {
			SpdOfPlayers[SpdOfPlayers.length] = NHLplayer[funnyCounterk][17]
		}
		var SpdSort, zerok;
		sortedSpd = []
		for(SpdSort = NHLplayer.length; SpdSort > 0; SpdSort--) {
			var newTablek = SpdOfPlayers.filter(sortSpd)
			function sortSpd(value) {
				return value < SpdOfPlayers[SpdSort]
			}
			for(zerok = 0; zerok < 50; zerok++) {
				if(sortedSpd[newTablek.length + zerok] == null || sortedSpd[newTablek.length + zerok] == undefined) {
					sortedSpd[newTablek.length + zerok] = playerRows[SpdSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersk()">Back</td><td id="forward100" class="header" onClick="loadOthersk()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupek
		for(dupek = hundred; dupek < oneHundred; dupek++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupek + '">' + sortedSpd[dupek] + '</tr>'
		}
		var f1 = dupek - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupek + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthersk() {
	var dupek
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersk()">Back</td><td id="forward100" class="header" onClick="loadOthersk()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupek = hundred; dupek < oneHundred; dupek++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupek + '">' + sortedSpd[dupek] + '</tr>'
	}
	var f1 = dupek - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupek + ' of ' + NHLplayer.length
}

function reloadOthersk() {
	var dupek
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersk()">Back</td><td id="forward100" class="header" onClick="loadOthersk()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupek = hundred; dupek < oneHundred; dupek++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupek + '">' + sortedSpd[dupek] + '</tr>'
	}
	var f1 = dupek - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupek + ' of ' + NHLplayer.length
}

var sortedEnd

function sortTableEnd() {
	if (sortEnddown == false) {
		EndOfPlayers = []
		for(funnyCounterl = 0; funnyCounterl < NHLplayer.length; funnyCounterl++) {
			EndOfPlayers[EndOfPlayers.length] = NHLplayer[funnyCounterl][18]
		}
		var EndSort, zerol;
		sortedEnd = []
		for(EndSort = 0; EndSort < NHLplayer.length; EndSort++) {
			var newTablel = EndOfPlayers.filter(sortEnd)
			function sortEnd(value) {
				return value > EndOfPlayers[EndSort]
			}
			for(zerol = 0; zerol < 50; zerol++) {
				if(sortedEnd[newTablel.length + zerol] == null || sortedEnd[newTablel.length + zerol] == undefined) {
					sortedEnd[newTablel.length + zerol] = playerRows[EndSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersl()">Back</td><td id="forward100" class="header" onClick="loadOthersl()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupel
		for(dupel = hundred; dupel < oneHundred; dupel++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupel + '">' + sortedEnd[dupel] + '</tr>'
		}
		var f1 = dupel - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupel + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = true
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	} else if (sortEnddown == true) {
		EndOfPlayers = []
		for(funnyCounterl = 0; funnyCounterl < NHLplayer.length; funnyCounterl++) {
			EndOfPlayers[EndOfPlayers.length] = NHLplayer[funnyCounterl][18]
		}
		var EndSort, zerol;
		sortedEnd = []
		for(EndSort = NHLplayer.length; EndSort > 0; EndSort--) {
			var newTablel = EndOfPlayers.filter(sortEnd)
			function sortEnd(value) {
				return value < EndOfPlayers[EndSort]
			}
			for(zerol = 0; zerol < 50; zerol++) {
				if(sortedEnd[newTablel.length + zerol] == null || sortedEnd[newTablel.length + zerol] == undefined) {
					sortedEnd[newTablel.length + zerol] = playerRows[EndSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersl()">Back</td><td id="forward100" class="header" onClick="loadOthersl()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupel
		for(dupel = hundred; dupel < oneHundred; dupel++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupel + '">' + sortedEnd[dupel] + '</tr>'
		}
		var f1 = dupel - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupel + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthersl() {
	var dupel
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersl()">Back</td><td id="forward100" class="header" onClick="loadOthersl()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupel = hundred; dupel < oneHundred; dupel++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupel + '">' + sortedEnd[dupel] + '</tr>'
	}
	var f1 = dupel - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupel + ' of ' + NHLplayer.length
}

function reloadOthersl() {
	var dupel
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersl()">Back</td><td id="forward100" class="header" onClick="loadOthersl()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupel = hundred; dupel < oneHundred; dupel++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupel + '">' + sortedEnd[dupel] + '</tr>'
	}
	var f1 = dupel - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupel + ' of ' + NHLplayer.length
}


var sortedDrv

function sortTableDrv() {
	if (sortDrvdown == false) {
		DrvOfPlayers = []
		for(funnyCounterm = 0; funnyCounterm < NHLplayer.length; funnyCounterm++) {
			DrvOfPlayers[DrvOfPlayers.length] = NHLplayer[funnyCounterm][26]
		}
		var DrvSort, zerom;
		sortedDrv = []
		for(DrvSort = 0; DrvSort < NHLplayer.length; DrvSort++) {
			var newTablem = DrvOfPlayers.filter(sortDrv)
			function sortDrv(value) {
				return value > DrvOfPlayers[DrvSort]
			}
			for(zerom = 0; zerom < 50; zerom++) {
				if(sortedDrv[newTablem.length + zerom] == null || sortedDrv[newTablem.length + zerom] == undefined) {
					sortedDrv[newTablem.length + zerom] = playerRows[DrvSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersm()">Back</td><td id="forward100" class="header" onClick="loadOthersm()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupem
		for(dupem = hundred; dupem < oneHundred; dupem++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupem + '">' + sortedDrv[dupem] + '</tr>'
		}
		var f1 = dupem - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupem + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = true
		sortLdrdown = false
		sortPsedown = false
	} else if (sortDrvdown == true) {
		DrvOfPlayers = []
		for(funnyCounterm = 0; funnyCounterm < NHLplayer.length; funnyCounterm++) {
			DrvOfPlayers[DrvOfPlayers.length] = NHLplayer[funnyCounterm][26]
		}
		var DrvSort, zerom;
		sortedDrv = []
		for(DrvSort = NHLplayer.length; DrvSort > 0; DrvSort--) {
			var newTablem = DrvOfPlayers.filter(sortDrv)
			function sortDrv(value) {
				return value < DrvOfPlayers[DrvSort]
			}
			for(zerom = 0; zerom < 50; zerom++) {
				if(sortedDrv[newTablem.length + zerom] == null || sortedDrv[newTablem.length + zerom] == undefined) {
					sortedDrv[newTablem.length + zerom] = playerRows[DrvSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersm()">Back</td><td id="forward100" class="header" onClick="loadOthersm()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupem
		for(dupem = hundred; dupem < oneHundred; dupem++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupem + '">' + sortedDrv[dupem] + '</tr>'
		}
		var f1 = dupem - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupem + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthersm() {
	var dupem
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersm()">Back</td><td id="forward100" class="header" onClick="loadOthersm()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupem = hundred; dupem < oneHundred; dupem++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupem + '">' + sortedDrv[dupem] + '</tr>'
	}
	var f1 = dupem - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupem + ' of ' + NHLplayer.length
}

function reloadOthersm() {
	var dupem
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersm()">Back</td><td id="forward100" class="header" onClick="loadOthersm()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupem = hundred; dupem < oneHundred; dupem++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupem + '">' + sortedDrv[dupem] + '</tr>'
	}
	var f1 = dupem - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupem + ' of ' + NHLplayer.length
}

var sortedLdr

function sortTableLdr() {
	if (sortLdrdown == false) {
		LdrOfPlayers = []
		for(funnyCountern = 0; funnyCountern < NHLplayer.length; funnyCountern++) {
			LdrOfPlayers[LdrOfPlayers.length] = NHLplayer[funnyCountern][20]
		}
		var LdrSort, zeron;
		sortedLdr = []
		for(LdrSort = 0; LdrSort < NHLplayer.length; LdrSort++) {
			var newTablen = LdrOfPlayers.filter(sortLdr)
			function sortLdr(value) {
				return value > LdrOfPlayers[LdrSort]
			}
			for(zeron = 0; zeron < 50; zeron++) {
				if(sortedLdr[newTablen.length + zeron] == null || sortedLdr[newTablen.length + zeron] == undefined) {
					sortedLdr[newTablen.length + zeron] = playerRows[LdrSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersn()">Back</td><td id="forward100" class="header" onClick="loadOthersn()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupen
		for(dupen = hundred; dupen < oneHundred; dupen++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupen + '">' + sortedLdr[dupen] + '</tr>'
		}
		var f1 = dupen - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupen + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = true
		sortPsedown = false
	} else if (sortLdrdown == true) {
		LdrOfPlayers = []
		for(funnyCountern = 0; funnyCountern < NHLplayer.length; funnyCountern++) {
			LdrOfPlayers[LdrOfPlayers.length] = NHLplayer[funnyCountern][20]
		}
		var LdrSort, zeron;
		sortedLdr = []
		for(LdrSort = NHLplayer.length; LdrSort > 0; LdrSort--) {
			var newTablen = LdrOfPlayers.filter(sortLdr)
			function sortLdr(value) {
				return value < LdrOfPlayers[LdrSort]
			}
			for(zeron = 0; zeron < 50; zeron++) {
				if(sortedLdr[newTablen.length + zeron] == null || sortedLdr[newTablen.length + zeron] == undefined) {
					sortedLdr[newTablen.length + zeron] = playerRows[LdrSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersn()">Back</td><td id="forward100" class="header" onClick="loadOthersn()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupen
		for(dupen = hundred; dupen < oneHundred; dupen++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupen + '">' + sortedLdr[dupen] + '</tr>'
		}
		var f1 = dupen - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupen + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOthersn() {
	var dupen
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersn()">Back</td><td id="forward100" class="header" onClick="loadOthersn()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupen = hundred; dupen < oneHundred; dupen++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupen + '">' + sortedLdr[dupen] + '</tr>'
	}
	var f1 = dupen - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupen + ' of ' + NHLplayer.length
}

function reloadOthersn() {
	var dupen
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOthersn()">Back</td><td id="forward100" class="header" onClick="loadOthersn()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupen = hundred; dupen < oneHundred; dupen++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupen + '">' + sortedLdr[dupen] + '</tr>'
	}
	var f1 = dupen - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupen + ' of ' + NHLplayer.length
}

var sortedPse

function sortTablePse() {
	if (sortPsedown == false) {
		PseOfPlayers = []
		for(funnyCountero = 0; funnyCountero < NHLplayer.length; funnyCountero++) {
			PseOfPlayers[PseOfPlayers.length] = NHLplayer[funnyCountero][19]
		}
		var PseSort, zeroo;
		sortedPse = []
		for(PseSort = 0; PseSort < NHLplayer.length; PseSort++) {
			var newTableo = PseOfPlayers.filter(sortPse)
			function sortPse(value) {
				return value > PseOfPlayers[PseSort]
			}
			for(zeroo = 0; zeroo < 50; zeroo++) {
				if(sortedPse[newTableo.length + zeroo] == null || sortedPse[newTableo.length + zeroo] == undefined) {
					sortedPse[newTableo.length + zeroo] = playerRows[PseSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOtherso()">Back</td><td id="forward100" class="header" onClick="loadOtherso()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupeo
		for(dupeo = hundred; dupeo < oneHundred; dupeo++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeo + '">' + sortedPse[dupeo] + '</tr>'
		}
		var f1 = dupeo - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeo + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = true
	} else if (sortPsedown == true) {
		PseOfPlayers = []
		for(funnyCountero = 0; funnyCountero < NHLplayer.length; funnyCountero++) {
			PseOfPlayers[PseOfPlayers.length] = NHLplayer[funnyCountero][19]
		}
		var PseSort, zeroo;
		sortedPse = []
		for(PseSort = NHLplayer.length; PseSort > 0; PseSort--) {
			var newTableo = PseOfPlayers.filter(sortPse)
			function sortPse(value) {
				return value < PseOfPlayers[PseSort]
			}
			for(zeroo = 0; zeroo < 50; zeroo++) {
				if(sortedPse[newTableo.length + zeroo] == null || sortedPse[newTableo.length + zeroo] == undefined) {
					sortedPse[newTableo.length + zeroo] = playerRows[PseSort]
					break;
				}
			}
		}
		document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOtherso()">Back</td><td id="forward100" class="header" onClick="loadOtherso()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
		var dupeo
		for(dupeo = hundred; dupeo < oneHundred; dupeo++) {
			document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeo + '">' + sortedPse[dupeo] + '</tr>'
		}
		var f1 = dupeo - 25
		document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeo + ' of ' + NHLplayer.length
		sortAgedown = false
		sortOvrdown = false
		sortPotdown = false
		sortoIQdown = false
		sortSacdown = false
		sortShtdown = false
		sortPacdown = false
		sortPasdown = false
		sortBkydown = false
		sortdIQdown = false
		sortRebdown = false
		sortSbkdown = false
		sortStldown = false
		sortStgdown = false
		sortChkdown = false
		sortFofdown = false
		sortSpddown = false
		sortEnddown = false
		sortDrvdown = false
		sortLdrdown = false
		sortPsedown = false
	}
}



function loadOtherso() {
	var dupeo
	oneHundred = oneHundred + 25
	hundred = hundred + 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOtherso()">Back</td><td id="forward100" class="header" onClick="loadOtherso()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupeo = hundred; dupeo < oneHundred; dupeo++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeo + '">' + sortedPse[dupeo] + '</tr>'
	}
	var f1 = dupeo - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeo + ' of ' + NHLplayer.length
}

function reloadOtherso() {
	var dupeo
	oneHundred = oneHundred - 25
	hundred = hundred - 25
	document.getElementById("team31roster").innerHTML = ""
	document.getElementById("team31roster").innerHTML = '<tr><td id="back100" class="header" onClick="reloadOtherso()">Back</td><td id="forward100" class="header" onClick="loadOtherso()">Next</td><td class="header" id="pageAPN" colspan=3></td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'
	for(dupeo = hundred; dupeo < oneHundred; dupeo++) {
		document.getElementById("team31roster").innerHTML += '<tr id="playerRow' + dupeo + '">' + sortedPse[dupeo] + '</tr>'
	}
	var f1 = dupeo - 25
	document.getElementById("pageAPN").innerHTML = f1 + ' through ' + dupeo + ' of ' + NHLplayer.length
}