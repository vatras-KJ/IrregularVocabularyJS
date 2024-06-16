const tableHead = {
	text: ['forma 1', 'forma 2', 'forma 3'],
}

const listWordsObject = [
	{
		title: 'zakładać się / obstawiać',
		forms: ['bet', 'bet', 'bet'],
		level: 1,
	},{
		title: 'kosztować',
		forms: ['cost', 'cost', 'cost'],
		level: 1,
	},{
		title: 'ciąć / skaleczyć',
		forms: ['cut', 'cut', 'cut'],
		level: 1,
	},{
		title: 'uderzyć',
		forms: ['hit', 'hit', 'hit'],
		level: 1,
	},{
		title: 'ranić / boleć',
		forms: ['hurt', 'hurt', 'hurt'],
		level: 1,
	},{
		title: 'pozwalać',
		forms: ['let', 'let', 'let'],
		level: 1,
	},{
		title: 'kłaść',
		forms: ['put', 'put', 'put'],
		level: 1,
	},{
		title: 'zamykać',
		forms: ['shut', 'shut', 'shut'],
		level: 1,
	},{
		title: 'tracić / zgubić',
		forms: ['lose', 'lost', 'lost'],
		level: 2,
	},{
		title: 'strzelać',
		forms: ['shoot', 'shot', 'shot'],
		level: 2,
	},{
		title: 'dostawać',
		forms: ['get', 'got', 'got'],
		level: 2,
	},{
		title: 'zapalać / oświetlić',
		forms: ['light', 'lit', 'lit'],
		level: 2,
	},{
		title: 'siedzieć / siadać',
		forms: ['sit', 'sat', 'sat'],
		level: 2,
	},{
		title: 'trzymać',
		forms: ['keep', 'kept', 'kept'],
		level: 2,
	},{
		title: 'spać',
		forms: ['sleep', 'slept', 'slept'],
		level: 2,
	},{
		title: 'czuć',
		forms: ['feel', 'felt', 'felt'],
		level: 2,
	},{
		title: 'opuszczać / zostawić',
		forms: ['leave', 'left', 'left'],
		level: 2,
	},{
		title: 'spotkać / poznać',
		forms: ['meet', 'met', 'met'],
		level: 2,
	},{
		title: 'przynieść / przyprowadzić',
		forms: ['bring', 'brought', 'brought'],
		level: 2,
	},{
		title: 'kupować',
		forms: ['buy', 'bought', 'bought'],
		level: 2,
	},{
		title: 'walczyć / bić się',
		forms: ['fight', 'fought', 'fought'],
		level: 2,
	},{
		title: 'myśleć / uważać',
		forms: ['think', 'thought', 'thought'],
		level: 2,
	},{
		title: 'łapć',
		forms: ['catch', 'caught', 'caught'],
		level: 2,
	},{
		title: 'uczyć',
		forms: ['teach', 'taught', 'taught'],
		level: 2,
	},{
		title: 'sprzedawać',
		forms: ['sell', 'sold', 'sold'],
		level: 2,
	},{
		title: 'powiedzieć',
		forms: ['tell', 'told', 'told'],
		level: 2,
	},{
		title: 'płacić',
		forms: ['pay', 'paid', 'paid'],
		level: 2,
	},{
		title: 'robić / wykonywać',
		forms: ['make', 'made', 'made'],
		level: 2,
	},{
		title: 'stać',
		forms: ['stand', 'stood', 'stood'],
		level: 2,
	},{
		title: 'rozumieć',
		forms: ['understand', 'understood', 'understood'],
		level: 2,
	},{
		title: 'pożyczać',
		forms: ['lend', 'lent', 'lent'],
		level: 2,
	},{
		title: 'wysyłać',
		forms: ['send', 'sent', 'sent'],
		level: 2,
	},{
		title: 'spędzać / wydawać',
		forms: ['spend', 'spent', 'spent'],
		level: 2,
	},{
		title: 'budować',
		forms: ['build', 'built', 'built'],
		level: 2,
	},{
		title: 'znaleźć',
		forms: ['find', 'found', 'found'],
		level: 2,
	},{
		title: 'mieć',
		forms: ['have', 'had', 'had'],
		level: 2,
	},{
		title: 'słyszeć',
		forms: ['hear', 'heard', 'heard'],
		level: 2,
	},{
		title: 'trzymać / posiadać',
		forms: ['hold', 'held', 'held'],
		level: 2,
	},{
		title: 'czytać',
		forms: ['read', 'read', 'read'],
		level: 2,
	},{
		title: 'mówić',
		forms: ['say', 'said', 'said'],
		level: 2,
	},
	
	{
		title: 'prowadzić',
		forms: ['drive', 'drove', 'driven'],
		level: 3,
	},
	{
		title: 'jeździć',
		forms: ['ride', 'rode', 'ridden'],
		level: 3,
	},
	{
		title: 'podnosić się / wzrastać',
		forms: ['rise', 'rose', 'risen'],
		level: 3,
	},
	{
		title: 'pisać',
		forms: ['write', 'wrote', 'written'],
		level: 3,
	},
	{
		title: 'ugryźć',
		forms: ['bite', 'bit', 'bitten'],
		level: 3,
	},
	{
		title: 'chować / ukrywać',
		forms: ['hide', 'hid', 'hidden'],
		level: 3,
	},
	{
		title: 'łamać / rozbić',
		forms: ['break', 'broke', 'broken'],
		level: 3,
	},
	{
		title: 'wybierać',
		forms: ['choose', 'chose', 'chosen'],
		level: 3,
	},
	{
		title: 'mówić / rozmawiać',
		forms: ['speak', 'spoke', 'spoken'],
		level: 3,
	},
	{
		title: 'budzić',
		forms: ['wake', 'woke', 'woken'],
		level: 3,
	},
	{
		title: 'wiać / dmuchać',
		forms: ['blow', 'blew', 'blown'],
		level: 3,
	},
	{
		title: 'rosnąć',
		forms: ['grow', 'grew', 'grown'],
		level: 3,
	},
	{
		title: 'znać / wiedzieć',
		forms: ['know', 'knew', 'known'],
		level: 3,
	},
	{
		title: 'latać',
		forms: ['fly', 'flew', 'flown'],
		level: 3,
	},
	{
		title: 'rysować / pociągnąć',
		forms: ['draw', 'drew', 'drawn'],
		level: 3,
	},
	{
		title: 'pokazywać',
		forms: ['show', 'showed', 'shown'],
		level: 3,
	},
	{
		title: 'nosić / zakładać',
		forms: ['wear', 'wore', 'worn'],
		level: 3,
	},
	{
		title: 'drzeć / rozdzierać',
		forms: ['tear', 'tore', 'torn'],
		level: 3,
	},
	{
		title: 'zaczynać',
		forms: ['begin', 'began', 'begun'],
		level: 3,
	},
	{
		title: 'pić',
		forms: ['drink', 'drank', 'drunk'],
		level: 3,
	},
	{
		title: 'pływać',
		forms: ['swim', 'swam', 'swum'],
		level: 3,
	},
	{
		title: 'dzwonić',
		forms: ['ring', 'rang', 'rung'],
		level: 3,
	},
	{
		title: 'śpiewać',
		forms: ['sing', 'sang', 'sung'],
		level: 3,
	},
	{
		title: 'jeść',
		forms: ['eat', 'ate', 'eaten'],
		level: 3,
	},
	{
		title: 'padać / spadać',
		forms: ['fall', 'fell', 'fallen'],
		level: 3,
	},{
		title: 'zapomnieć',
		forms: ['forget', 'forgot', 'forgotten'],
		level: 3,
	},
	{
		title: 'dawać',
		forms: ['give', 'gave', 'given'],
		level: 3,
	},
	{
		title: 'widzieć',
		forms: ['see', 'saw', 'seen'],
		level: 3,
	},
	{
		title: 'brać',
		forms: ['take', 'took', 'taken'],
		level: 3,
	},
]
