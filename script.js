
/*  
		The Welcome To The Game II Assistant is built to help players of WTTG2
		Copyright (C) 2021 Fierce Thunder

		This program is free software: you can redistribute it and/or modify
		it under the terms of the GNU General Public License as published by
		the Free Software Foundation, either version 3 of the License, or
		(at your option) any later version.

		This program is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		GNU General Public License for more details.

		You should have received a copy of the GNU General Public License
		along with this program.  If not, see <https://www.gnu.org/licenses/>.  */

//==========================================================================Static Data
{
var sitedata = {
		"Bug Friendly":       {id:100,sub:["Store","FAQ","Noid","Join"]},
		"Cleaning Services":  {id:105,sub:["Burial","Freezing"]},
		"Cry Bitch":          {id:108,sub:["Login"]},
		"Dont Waste It":      {id:110,sub:["No","Yes"]},
		"Drone Spy":          {id:113,sub:["Videos","SpyForMe"]},
		"EnCrave":            {id:116,sub:["GateOpen"]},
		"Evidence Locker":    {id:118,sub:["Leaked","Confiscated","Contribute","Purchase"]},
		"Evil Collection":    {id:123,sub:["Pics","CreepyPics","RandomPics","Memes","Link","AB","AB2","Baby","Chat"]},
		"Eye":                {id:133},
		"Father Donald":      {id:134,sub:["Join"]},
		"Foot Doctor":        {id:136,sub:["MyFavoriteFeet","HomeMade","SendMePics"]},
		"Forgive Me":         {id:140,sub:["Confess"]},
		"Fortune Cookie":     {id:142},
		"Grandmas Fantasy":   {id:143,sub:["Older"]},
		"Heirloom":           {id:145,sub:["Quality","Specials","Containers","Order","PGPKey","WalletID","Error"]},
		"Hidden Pleasures":   {id:153,sub:["RequestSale","Range1","Range2","Range3","Range4","Range5","Message","Buy","SignIn"]},
		"I Love Cats":        {id:163,sub:["MyCats","Contact"]},
		"Is Evil":            {id:166},
		"Keep Sake":          {id:167},
		"Kill For Me":        {id:168,sub:["Targets","Instructions"]},
		"Milk Supply":        {id:171,sub:["MilkPictures"]},
		"Mortal Masks":       {id:173,sub:["Order","How"]},
		"Mutilation":         {id:176,sub:["Login","Join","NoWallet"]},
		"My Gut":             {id:180,sub:["Shop","Buy","Special","Contact"]},
		"Myriad":             {id:185},
		"Oneless":            {id:186},
		"Order Of Nine":      {id:187,sub:["Join"]},
		"Panty Sales":        {id:189},
		"Pay To Rape":        {id:190,sub:["FAQ","Pay"]},
		"Red Triangle":       {id:193},
		"Scream Bitch":       {id:194},
		"Share Your Genitals":{id:195},
		"St Louis Arch":      {id:196,sub:["Arch","Aliens","WhyDie"]},
		"Thanks For Visiting":{id:200,sub:["DontTalkToMe","Slide","BabyShrimp","Posture","Bar","EvilMonster","Slide2","Creepy","Face","FakeMain","Black","Numbers"]},
		"The Black Waves":    {id:213},
		"The Bomb Maker":     {id:214},
		"The Doll Maker":     {id:215,sub:["Enter"]},
		"The End Of NY":      {id:217},
		"The Granddaddy":     {id:218,sub:["Contact","Gallery","Error"]},
		"The Grey":           {id:222,sub:["Interius","Latus","Centrum","Inanis"]},
		"The Hall":           {id:227},
		"The Light Within":   {id:228,sub:["Saved"]},
		"The Loogaroo":       {id:230},
		"THE MAGISTRI":       {id:231,sub:["Enter","Join","Walk"]},
		"The Prey":           {id:235},
		"The Rule Of Three":  {id:236},
		"Vacation":           {id:237},
		"Warehouse 33":       {id:238,sub:["Warehouse1","Warehouse2","Warehouse4"]},
		"We Rock":            {id:242},
		"IAMHERE":            {id:243,times:":00 - :14"},
		"Borrow My Daughter": {id:244,times:":00 - :29"},
		"Deep Journal":       {id:245,times:":00 - :29",sub:["Page 2","Page 3"]},
		"YOU THERE?":         {id:248,times:":00 - :29"},
		"Ave Satan":          {id:249,times:":30 - :44"},
		"Fifty Seven":        {id:250,times:":30 - :44"},
		"Number Station":     {id:251,times:":30 - :44"},
		"Your Data":          {id:252,times:":30 - :44"},
		"THANATOS":           {id:253,times:":45 - :59"},
		"Little Friends":     {id:254,times:":45 - :59",sub:["Error"]},
		"Brutal Underground": {id:256,times:":30 - :59",sub:["Sign Up"]}
	}, wifidata = [
		{"position":0,"range":1,"level":0,"track":{"time":977,"chance":"88"},"channel":"1","connection":{"ping":70,"type":"G"},"name":"TP-LINK_8907_5G"},
		{"position":1,"range":1,"level":0,"track":{"time":443,"chance":"82"},"channel":"10","connection":{"ping":77,"type":"B"},"name":"TC8717T10"},
		{"position":1,"range":1,"level":0,"track":{"time":482,"chance":"89"},"channel":"1","connection":{"ping":80,"type":"BP"},"name":"DDW35363"},
		{"position":1,"range":2,"level":0,"track":{"time":522,"chance":"75"},"channel":"3","connection":{"ping":78,"type":"BP"},"name":"FreeWifi7899"},
		{"position":2,"range":1,"level":0,"track":{"time":630,"chance":"70"},"channel":"8","connection":{"ping":60,"type":"BP"},"name":"doody"},
		{"position":3,"range":1,"level":0,"track":{"time":310,"chance":"95"},"channel":"7","connection":{"ping":70,"type":"G"},"name":"FreeWifiNoVirus"},

		{"position":0,"range":1,"level":1,"track":{"time":376,"chance":"83"},"channel":"8","connection":{"ping":72,"type":"BP"},"probe":{"port":"260 - 300"},"name":"SSWIFI"},
		{"position":0,"range":1,"level":1,"track":{"time":312,"chance":"65"},"channel":"8","connection":{"ping":67,"type":"BP"},"probe":{"port":"600 - 750"},"name":"D59709"},
		{"position":1,"range":1,"level":1,"track":{"time":543,"chance":"65"},"channel":"12","connection":{"ping":69,"type":"BP"},"probe":{"port":"500 - 675"},"name":"PWF1382445"},
		{"position":1,"range":3,"level":1,"track":{"time":477,"chance":"70"},"channel":"5","connection":{"ping":74,"type":"G"},"probe":{"port":"350 - 550"},"name":"Chanyia"},
		{"position":2,"range":1,"level":1,"track":{"time":565,"chance":"85"},"channel":"3","connection":{"ping":69,"type":"G"},"probe":{"port":"900 - 975"},"name":"Flter"},
		{"position":2,"range":1,"level":1,"track":{"time":720,"chance":"60"},"channel":"3","connection":{"ping":60,"type":"G"},"probe":{"port":"485 - 715"},"name":"SuddenLink990"},
		{"position":3,"range":1,"level":1,"track":{"time":675,"chance":"85"},"channel":"7","connection":{"ping":70,"type":"BP"},"probe":{"port":"455 - 520"},"name":"WIFIAF1A5D"},
		{"position":3,"range":3,"level":1,"track":{"time":674,"chance":"69"},"channel":"6","connection":{"ping":75,"type":"BP"},"probe":{"port":"145 - 210"},"name":"tedata"},
		{"position":3,"range":3,"level":1,"track":{"time":705,"chance":"74"},"channel":"6","connection":{"ping":62,"type":"BP"},"probe":{"port":"375 - 830"},"name":"mycci7471"},

		{"position":0,"range":1,"level":2,"track":{"time":401,"chance":"48"},"channel":"4","connection":{"ping":42,"type":"N"},"inject":{"count":"99","wait":"7","crash":"61","total":"450 - 670"},"name":"DA3CHICKZ"},
		{"position":0,"range":1,"level":2,"track":{"time":484,"chance":"49"},"channel":"6","connection":{"ping":39,"type":"N"},"inject":{"count":"96","wait":"11","crash":"39","total":"620 - 745"},"name":"UAPPY-FI"},
		{"position":0,"range":1,"level":2,"track":{"time":541,"chance":"63"},"channel":"7","connection":{"ping":44,"type":"N"},"inject":{"count":"42","wait":"8","crash":"41","total":"100 - 360"},"name":"Khaled"},
		{"position":1,"range":1,"level":2,"track":{"time":820,"chance":"40"},"channel":"4","connection":{"ping":35,"type":"N"},"inject":{"count":"100","wait":"3","crash":"58","total":"510 - 675"},"name":"NetflxnChillByMyself"},
		{"position":1,"range":1,"level":2,"track":{"time":726,"chance":"44"},"channel":"11","connection":{"ping":39,"type":"G"},"inject":{"count":"170","wait":"5","crash":"62","total":"650 - 950"},"name":"DevShareTWO"},
		{"position":1,"range":2,"level":2,"track":{"time":550,"chance":"63"},"channel":"12","connection":{"ping":40,"type":"G"},"inject":{"count":"146","wait":"7","crash":"58","total":"855 - 980"},"name":"WIRELESSNET2"},
		{"position":2,"range":1,"level":2,"track":{"time":645,"chance":"65"},"channel":"1","connection":{"ping":37,"type":"G"},"inject":{"count":"61","wait":"9","crash":"43","total":"220 - 475"},"name":"FBI Survellance Van"},
		{"position":2,"range":1,"level":2,"track":{"time":786,"chance":"50"},"channel":"7","connection":{"ping":39,"type":"N"},"inject":{"count":"78","wait":"9","crash":"47","total":"230 - 530"},"name":"Ataua"},
		{"position":2,"range":3,"level":2,"track":{"time":626,"chance":"56"},"channel":"12","connection":{"ping":38,"type":"N"},"inject":{"count":"63","wait":"7","crash":"41","total":"275 - 320"},"name":"swsecure"},
		{"position":3,"range":1,"level":2,"track":{"time":464,"chance":"46"},"channel":"5","connection":{"ping":47,"type":"G"},"inject":{"count":"79","wait":"5","crash":"72","total":"540 - 800"},"name":"ali"},
		{"position":3,"range":1,"level":2,"track":{"time":634,"chance":"54"},"channel":"9","connection":{"ping":42,"type":"G"},"inject":{"count":"78","wait":"6","crash":"78","total":"87 - 660"},"name":"SENDemo"},

		{"position":0,"range":1,"level":3,"track":{"time":1038,"chance":"29"},"channel":"2","connection":{"ping":20,"type":"AC"},"inject":{"count":"83","wait":"3","crash":"66","total":"660 - 840"},"name":"Ethical_Hacker"},
		{"position":0,"range":1,"level":3,"track":{"time":861,"chance":"29"},"channel":"7","connection":{"ping":29,"type":"AC"},"inject":{"count":"67","wait":"6","crash":"37","total":"797 - 971"},"name":"YDidIOrderThisWater"},
		{"position":0,"range":1,"level":3,"track":{"time":1185,"chance":"26"},"channel":"1","connection":{"ping":10,"type":"AC"},"inject":{"count":"64","wait":"12","crash":"29","total":"600 - 808"},"name":"SnuffBox"},
		{"position":0,"range":1,"level":3,"track":{"time":710,"chance":"43"},"channel":"1","connection":{"ping":11,"type":"AC"},"inject":{"count":"29","wait":"10","crash":"32","total":"300 - 450"},"name":"MaxiumBlack"},
		{"position":0,"range":1,"level":3,"track":{"time":969,"chance":"36"},"channel":"4","connection":{"ping":18,"type":"AC"},"inject":{"count":"78","wait":"3","crash":"53","total":"890 - 990"},"name":"Bring Beer to 504"},
		{"position":1,"range":1,"level":3,"track":{"time":749,"chance":"35"},"channel":"7","connection":{"ping":23,"type":"AC"},"inject":{"count":"4","wait":"4","crash":"51","total":"50 - 98"},"name":"KPN Fon"},
		{"position":1,"range":2,"level":3,"track":{"time":765,"chance":"43"},"channel":"7","connection":{"ping":37,"type":"N"},"inject":{"count":"85","wait":"7","crash":"30","total":"820 - 950"},"name":"SilenceOfTheLANS"},
		{"position":1,"range":3,"level":3,"track":{"time":870,"chance":"35"},"channel":"12","connection":{"ping":15,"type":"N"},"inject":{"count":"54","wait":"10","crash":"29","total":"432 - 790"},"name":"DrAdelDink"},
		{"position":2,"range":1,"level":3,"track":{"time":848,"chance":"26"},"channel":"5","connection":{"ping":16,"type":"N"},"inject":{"count":"19","wait":"8","crash":"47","total":"100 - 300"},"name":"TellMyWifiLoveHer"},
		{"position":2,"range":1,"level":3,"track":{"time":1029,"chance":"30"},"channel":"3","connection":{"ping":14,"type":"AC"},"inject":{"count":"63","wait":"7","crash":"57","total":"500 - 708"},"name":"PHATCLOUD5"},
		{"position":2,"range":3,"level":3,"track":{"time":774,"chance":"28"},"channel":"10","connection":{"ping":27,"type":"AC"},"inject":{"count":"74","wait":"10","crash":"34","total":"477 - 945"},"name":"RideThisCrazyWave"},
		{"position":3,"range":1,"level":3,"track":{"time":592,"chance":"45"},"channel":"10","connection":{"ping":28,"type":"N"},"inject":{"count":"19","wait":"4","crash":"41","total":"154 - 249"},"name":"WINSLOWS"},
		{"position":3,"range":1,"level":3,"track":{"time":745,"chance":"41"},"channel":"6","connection":{"ping":26,"type":"AC"},"inject":{"count":"33","wait":"11","crash":"36","total":"250 - 477"},"name":"JonesLaw"},
		{"position":3,"range":3,"level":3,"track":{"time":791,"chance":"32"},"channel":"4","connection":{"ping":12,"type":"N"},"inject":{"count":"34","wait":"8","crash":"37","total":"273 - 506"},"name":"Big Dave Network"},
		{"position":4,"range":3,"level":3,"track":{"time":1500,"chance":"5"},"channel":"5","connection":{"ping":5,"type":"AC"},"inject":{"count":"49","wait":"15","crash":"80","total":"950 - 999"},"name":"DOSNET"},

		{"position":3,"range":3,"level":2,"track":{"time":824,"chance":"65"},"channel":"5","connection":{"ping":17,"type":"N"},"inject":{"count":"29","wait":"12","crash":"46","total":"55 - 180"},"name":"DonaldsWifi","secret":1},
		{"position":2,"range":3,"level":3,"track":{"time":743,"chance":"21"},"channel":"4","connection":{"ping":47,"type":"N"},"inject":{"count":"27","wait":"8","crash":"76","total":"400 - 556"},"name":"Hidden Network","secret":1}
	], tenantdata = [
		{"doll":0,"sex":0,"age":32,"name":"Addyson Pearson","note":"Has very LOUD dog. Barks a lot."},
		{"doll":0,"sex":0,"age":56,"name":"Alden Chambers","note":"Always wears gloves"},
		{"doll":0,"sex":0,"age":51,"name":"Alfred Crosby","note":"You can hear the sounds of his mistress beating him into submission every Sunday and Thursday from 7pm-10pm. Would recommend ear plugs for those days."},
		{"doll":1,"sex":1,"age":18,"name":"Alice Shaw","note":"Is a flute player"},
		{"doll":0,"sex":0,"age":34,"name":"Alonso Frost","note":"Argues with wife"},
		{"doll":1,"sex":1,"age":27,"name":"Ashlynn Rangel","note":"Studying for PHD, always pays on time."},
		{"doll":1,"sex":1,"age":29,"name":"Ayana Armstrong","note":"Always wears black, very mysterious. Guy named Adam visits her often."},
		{"doll":0,"sex":0,"age":41,"name":"Brayden Kelly","note":"Way too noisy, cops called several times for disturbances."},
		{"doll":0,"sex":0,"age":52,"name":"Brendan Davenport","note":"Complaints from members staying at this apartment complex due to hearing strange noises. Final warning."},
		{"doll":0,"sex":0,"age":43,"name":"Brenden Fox","note":"Has severe body odor."},
		{"doll":0,"sex":0,"age":43,"name":"Brennan Mcgee","note":"Is clean"},
		{"doll":1,"sex":1,"age":35,"name":"Bria Lozano","note":"Often comes drunk at night. Has a lot of bruises."},
		{"doll":1,"sex":1,"age":42,"name":"Carissa Whitehead","note":"Has teenage kids, one is a typical teen and causes problems."},
		{"doll":0,"sex":0,"age":64,"name":"Carlos Moon","note":"Creeps out female tenants"},
		{"doll":1,"sex":1,"age":18,"name":"Clare Holloway","note":"Works late nights and always pays rent with cash."},
		{"doll":0,"sex":0,"age":31,"name":"Cristian Ross","note":"Always smells peculiar (formaldehyde?)"},
		{"doll":0,"sex":0,"age":21,"name":"Dale Jackson","note":"Has track marks"},
		{"doll":0,"sex":0,"age":33,"name":"Damon Sullivan","note":"Performs local volunteer work"},
		{"doll":1,"sex":1,"age":38,"name":"Dana Steele","note":"Clean freak, really werid. Leaves shoes outside door. "},
		{"doll":0,"sex":0,"age":37,"name":"Darren Alexander","note":"Is a registered sex offender"},
		{"doll":0,"sex":0,"age":48,"name":"Dawson Blevins","note":"Often has nieces visit him."},
		{"doll":0,"sex":0,"age":40,"name":"Deacon Woodward","note":"Usually late on rent"},
		{"doll":1,"sex":1,"age":37,"name":"Delilah Walters","note":"Havent seen in weeks. No response, mail is piling up."},
		{"doll":1,"sex":1,"age":24,"name":"Diya Marquez","note":"Always has shady people around."},
		{"doll":1,"sex":0,"age":60,"name":"Drake Clay","note":"Has one child. Female."},
		{"doll":1,"sex":1,"age":19,"name":"Emma Everett","note":"Plumbing clogged again. Think she's doing it on purpose."},
		{"doll":0,"sex":0,"age":51,"name":"Erik Tucker","note":"Currently overseas"},
		{"doll":0,"sex":0,"age":38,"name":"Fletcher Salazar","note":"Probably a meth addict."},
		{"doll":1,"sex":1,"age":22,"name":"Hallie Nicholson","note":"Is a night owl."},
		{"doll":1,"sex":1,"age":39,"name":"Haylie Morris","note":"Has the consistency to talk everyones ear off."},
		{"doll":1,"sex":1,"age":40,"name":"Hillary Rocha","note":"Works out a lot, alway takes early morning jobs."},
		{"doll":0,"sex":0,"age":25,"name":"Hudson Raymond","note":"Divorced"},
		{"doll":0,"sex":0,"age":51,"name":"Jack Ferguson","note":"Wants to move two flights up"},
		{"doll":1,"sex":1,"age":23,"name":"Janiah Osborn","note":"Recently made redundant. May be late on payment this month."},
		{"doll":1,"sex":1,"age":35,"name":"Jenny Sutton","note":"Is a late payer... Likely an alcoholic apartment smells of strong liquor"},
		{"doll":0,"sex":0,"age":21,"name":"Jordyn Dalton","note":"Is currently out of town for family matters. Will be back at the end of the month. Rent payment expected to be made on schedule."},
		{"doll":0,"sex":0,"age":46,"name":"Keith Cooke","note":"Keeps some interesting \"surprises\" underneath the bathroom floorboards."},
		{"doll":1,"sex":1,"age":26,"name":"Kellen Blake","note":"Works night shifts."},
		{"doll":1,"sex":1,"age":37,"name":"Kylie Hogan","note":"Has two daughters."},
		{"doll":1,"sex":1,"age":19,"name":"Larissa Clay","note":"Carries her chihuahua in her purse."},
		{"doll":1,"sex":1,"age":28,"name":"Lea Chen","note":"Always orders take out, never leaves apartment."},
		{"doll":1,"sex":1,"age":21,"name":"Lilia Holder","note":"Hair smells like lavender"},
		{"doll":1,"sex":1,"age":21,"name":"Lilian Tyler","note":"Typical college drunk."},
		{"doll":1,"sex":1,"age":41,"name":"Londyn Morales","note":"Very nice, always brings down cookies."},
		{"doll":0,"sex":0,"age":29,"name":"Lucas Holmes","note":"I hear strange noises coming from the apartment at odd hours. I have received no complaints yet so it seems there is nothing to be concerned about at the moment but... the noises... I have never heard anything like it before."},
		{"doll":1,"sex":1,"age":18,"name":"Marie Downs","note":"Parents visit often, worried about her. Not sure about this one."},
		{"doll":0,"sex":0,"age":73,"name":"Mason Santiago","note":"Walks with a limp."},
		{"doll":0,"sex":0,"age":59,"name":"Micah Patel","note":"Sleep walks"},
		{"doll":1,"sex":1,"age":29,"name":"Miriam Schwartz","note":"Neglects house maintenance"},
		{"doll":0,"sex":0,"age":83,"name":"Nash Huynh","note":"Veteran"},
		{"doll":1,"sex":1,"age":33,"name":"Noe Willis","note":"Aspiring singer, plays piano all day and signs."},
		{"doll":1,"sex":1,"age":25,"name":"Reese Beasley","note":"Has a pet turtle, works as a nurse in the nearby hospital"},
		{"doll":0,"sex":0,"age":21,"name":"Richard Vincent","note":"for sure not getting their security deposit back"},
		{"doll":0,"sex":0,"age":29,"name":"Ronnie Park","note":"In last 3 years he has a friendly beautiful wife that i ever met, but since his wife's death he never gooes outside."},
		{"doll":1,"sex":1,"age":36,"name":"Rosemary Holt","note":"Watches adult films very loudly."},
		{"doll":0,"sex":0,"age":23,"name":"Shawn Green","note":"Always pays rent 1 day early, and deathly silent, nice man though."},
		{"doll":1,"sex":1,"age":45,"name":"Shea Holden","note":"Reeks of cigarettes, avid chain smoker."},
		{"doll":1,"sex":1,"age":27,"name":"Skylar Pennington","note":"Is out on vacation for 3 months"},
		{"doll":0,"sex":0,"age":36,"name":"Tommy Mata","note":"Rarely comes out of apartment and is socially awkward."},
		{"doll":1,"sex":0,"age":43,"name":"Tommy Ryan","note":"Has 2 kids, boy, girl."},
		{"doll":0,"sex":0,"age":18,"name":"Walker Johnston","note":"Constant problems with police"}
	], tips = [
		"Remember to check in the source code",
		"Dont forget to hover your mouse over entire sites",
		"You shouldnt check the peep hole",
		"Listen for the door",
		"Be quiet when hiding or he will find you",
		"Remember to practice your hacking skills",
		"You can't force hacks in 1337 mode",
		"Dont forget to buy your backdoors",
		"Hacks are the best way to gain DosCoin",
		"Zonewall will not give you DosCoin for backdoors",
		"The game includes a lot of dead websites that will never be open",
		"If possible, you should save up for key cue",
		"Remember to grab the flashlight",
		"Dont waste the flashlight, you dont want to be stuck in the dark",
		"More secure networks are faster and safer",
		"Dont forget to log off when you leave the PC",
		"Remember to switch wifi networks",
		"Move your router to find more wifi networks",
		"Dont forget the Breather",
		"Avoid the alley later in the game",
		"Always listen for the Breather",
		"Press up and down in console to view command history",
		"You can use the command HELP in skybreak for additional information",
		"Dont run through doors, you don't know who might be there",
		"Dont forget your friend in the window",
		"Say hi to Lucas for me",
		"The Noir are not good at hugs",
		"HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH",
		"Dont look behind you",
		"Dont worry about the noises behind you, they mean nothing... probably",
		"Error 418 I am a teapot",
		"Have you heard of WTTG2+",
		"I heard two car honks...",
		"Blackout incoming...",
		"You are an amusing puppet",
		"Dont underestimate the Doll Maker",
		"You can use this tool to save and organize your keys",
		"Purchases from the Shadow Market can be collected in the alleyway",
		"Purchases from the ZeroDay Market are downloaded to your computer",
		"Forgive Me cant contain keys",
		"Rule of Three cant contain keys",
		"Motion Sensors can be used to catch a killer off guard",
		"It is best not to tempt the police",
		"If the Hitman finds you aren't home you will have a bad day",
		"Dont let Noir catch you off guard",
		"The Noir love darkness",
		"Tick Tock",
		"It is best to skip to the WPA2 Skybreak library"
	]
}

//==========================================================================Variable Data
var data = {
	"general":{
		"click":new Audio('Assets/general_mouseclick.mp3'),
		"beep":new Audio('Assets/general_motionsensoralert.mp3')},
	"note":{
		"keys":[null,"????????????","????????????","????????????","????????????","????????????","????????????","????????????","????????????"],
		"content":""},
	"info":{
		"current":0},
	"wiki":{
		"editor":0,
		"current":1,
		"sites":[null,{},{},{}],
		"keys":[null,0,0,0],
		"total":[null,2,3,3]},
	"wifi":{
		"intro":1,
		"current":-1,
		"reference":undefined,
		"button":"No Timer Active",
		"timer":[0,0,0,0,"",""],
		"cooldowns":full_array(wifidata.length,0),
		"timerfull":full_array(wifidata.length,0),
		"timerlive":full_array(wifidata.length,0),
		"passwords":full_array(wifidata.length,"")},
	"tenant":{
		"rooms":full_array(tenantdata.length,""),
		"availability":full_array(tenantdata.length,1)},
	"simulator":{
		"soundplayed":0,
		"active":0,
		"reference":0,
		"visible":1,
		"sound1":new Audio('Assets/hitman_doorknob.mp3'),
		"sound2":new Audio('Assets/hitman_prayforyou.mp3')},
//	"test":{ This data is now obsolete but may become necessary in the future
//		"value":"HAQC2IBVMJTGGOBQGNTDKODFGIQOFIEA"
//	},
	"popup":{
		"wifi":{"active":0,"reference":0},
		"notes":{"active":0,"reference":0}}
}

//Clickpoints Cycle Test Variable
//window.temp = 100

//==========================================================================Functions

function full_array(i,v) {var a = [];for (var i = i;i > 0;i--) {a.push(v)};return a}

//=============================
//=============================Popup Functions
//=============================
function popwifi() {
	if (data.popup.wifi.active != 1) {
		data.popup.wifi.active = 1
		data.popup.wifi.reference = window.open("popup.html","Wifi Mimic","height=500,width=500,left=100,top=100,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no")
		data.popup.wifi.reference.document.onunload = function() {
			var win = window.opener
			if (!win.closed) {win.popwificlose()}
		}
		data.popup.wifi.reference.document.onload = function() {
			var win = window.opener
			if (!win.closed) {win.timerdisplay()}
		}
	}
}

function popwificlose() {
	data.popup.wifi.active = 0
}

function popnotes() {
	if (data.popup.notes.active != 1) {
		data.popup.notes.active = 1
		data.popup.notes.reference = window.open("popup.html","Notes Mimic","height=500,width=500,left=100,top=100,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no")
		data.popup.notes.reference.document.onunload = function() {
			var win = window.opener
			if (!win.closed) {win.popnotesclose()}
		}
		data.popup.notes.reference.document.onload = function() {
			var win = window.opener
			if (!win.closed) {win.noteinput()}
		}
	}
}

function popnotesclose() {
	data.popup.notes.active = 0
}

//=============================
//=============================Wiki Functions
//=============================
function wiki_input() {//Updates wiki data from import field
	var r = document.getElementById("wiki_data")
	var c = r.value
	r.value = ""
	if (c.length == 1) {return}
	var d = {}
	var s = [...new Set(c.match(/(?=^)[\w ]+[!?]?(?= -)/gm))]
	if (s.length != 0) {
		s.forEach(function(n){
			var i = sitedata[n]
			if (i == undefined) {
				d[n] = []
			} else {
				d[n] = full_array((i.sub?.length ?? 0) + 1,[0,0,0,0])
			}
		})
		//console.log("Final",d)
		data.wiki.sites[data.wiki.current] = JSON.parse(JSON.stringify(d))
		data.wiki.keys[data.wiki.current] = 0
		wiki_update()
	}
}

function wiki_demo() {//Forces update of wiki data
	click()
	data.wiki.sites[data.wiki.current] = {"BathRoom Cams":[],"Brutal Underground":[[0,0,0,0],[0,0,0,0]],"Cheap Surgery":[],"Chosen Awake":[],"Corpses For Sell":[],"Cry Bitch":[[0,0,0,0],[0,0,0,0]],"Deep Journal":[[0,0,0,0],[0,0,0,0],[0,0,0,0]],"DEEPDOTWEB":[],"Dream Place":[],"Evil Collection":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"Eye":[[0,0,0,0]],"Forgive Me":[[0,0,0,0],[0,0,0,0]],"Hot Burners":[],"IAMHERE":[[0,0,0,0]],"Keep Sake":[[0,0,0,0]],"Little Friends":[[0,0,0,0],[0,0,0,0]],"Scream Bitch":[[0,0,0,0]],"Secure Drop":[],"SKYWEB":[],"St Louis Arch":[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],"The 8th Sin":[],"The Doll Maker":[[0,0,0,0],[0,0,0,0]],"The Light Within":[[0,0,0,0],[0,0,0,0]],"Vacation":[[0,0,0,0]],"YOU THERE?":[[0,0,0,0]]}
	//data.wiki.sites[data.wiki.current] = {"Deep Journal":[[0,0,0,0],[0,0,0,0],[0,0,0,0]]}
	wiki_update()
}

function wiki_update(m) {//Updates the currently displayed data, also handles current page
	//Disable editor flag

	if (m != undefined) {
		click()
		data.wiki.current = ((data.wiki.current + m + 2) % 3) + 1
		document.getElementById("wiki_title").innerHTML = "Wiki " + "III".slice(0,data.wiki.current)
		wiki_updatekeys()
	}

	var s = Object.getOwnPropertyNames(data.wiki.sites[data.wiki.current]).sort()
	var t = document.getElementById("wiki_list")
	for (var y = t.rows.length - 1; y > 0; y--) {t.deleteRow(-1)}
	if (s.length == 0) {
		t.insertRow(-1).innerHTML = `<br><br><br><br>It's quite empty in here...<br><br>Why not add some sites?`
	} else {
		s.forEach(function(n){
			wiki_appendsite(t,n)
		})
	}
	
	function wiki_appendsite(t,n) {//Take a website name and display the associated data
		var a,b,c,d,e,f,g,h
		e = sitedata[n]
		i = data.wiki.sites[data.wiki.current][n]
		if (e == undefined) {
			a = t.insertRow(-1)
			b = a.insertCell(0)
			c = a.insertCell(1)
			d = a.insertCell(2)
			b.innerHTML = n
			c.innerHTML = `<i class="secondary">Dead Site</i>`
			d.innerHTML = `<button class="disabled"><i class="icon-mouse-pointer"></i></button> <button class="disabled"><i class="icon-search"></i></button><button class="disabled"><i class="icon-search-plus"></i></button><button class="disabled"><i class="icon-key"></i></button><button class="disabled"><i class="icon-link"></i></button>`
			return
		}
		f = e.id
		g = (e.sub?.length ?? 0) + 1
		for (h = 0; g > h; h++) {
			//console.log(n,i,i[h])
			a = t.insertRow(-1)
			b = a.insertCell(0)
			c = a.insertCell(1)
			d = a.insertCell(2)
			b.innerHTML = (h != 0) ? (((h + 1 == g) ? '⠀└─ ':'⠀├─ ') + e.sub[h - 1]):n
			c.innerHTML = (h != 0) ? ('<i class="child">⠀Subpage</i>'):((e.times == undefined) ? 'Always Available':e.times)
			d.innerHTML = `<button onclick="wiki_previewupdate(${f + h})"><i class="icon-mouse-pointer"></i></button> <button class="${(i[h][0]) ? "":"secondary"}" onclick="wiki_notetoggle(this,'${n}',${h},0)"><i class="icon-search"></i></button><button class="${(i[h][1]) ? "":"secondary"}" onclick="wiki_notetoggle(this,'${n}',${h},1)"><i class="icon-search-plus"></i></button><button class="${(i[h][2]) ? "":"secondary"}" onclick="wiki_notetoggle(this,'${n}',${h},2)"><i class="icon-key"></i></button><button class="${(i[h][3]) ? "":"secondary"}" onclick="wiki_notetoggle(this,'${n}',${h},3)"><i class="icon-link"></i></button>`
		}
	}
}

function wiki_editor() {//Replaces currently displayed data with website editor
	//Is editor enabled?
		//Call wiki_update and return
	//Else
		//Erase and load editor
		//Set editor flag
	var t = document.getElementById("wiki_list")
	for (var y = t.rows.length - 1; y > 0; y--) {t.deleteRow(-1)}
}

function wiki_notetoggle(e,n,i,b) {//Toggle color of note taking buttons
	click()
	if (b == 2) {data.wiki.keys[data.wiki.current] += (e.classList.contains("secondary")) ? 1:-1;wiki_updatekeys()}
	data.wiki.sites[data.wiki.current][n][i][b] ^= 1
	//console.log(data.wiki.sites[data.wiki.current][n][i][b])
	e.classList.toggle("secondary")
}

function wiki_updatekeys() {//Updates the remaining keys count
	document.getElementById("wiki_keys").innerHTML = '<b>Keys remaining: ' + Math.max((data.wiki.total[data.wiki.current] - data.wiki.keys[data.wiki.current]),0) + '</b>'
}

function wiki_previewload() {//Create a click event listener when the clickpoints popup finished loading
	try {
		document.getElementById("preview").contentWindow.addEventListener('click', function(e) {wiki_previewupdate(-1)})
	} catch (e) {
		wiki_previewupdate(-1)
		console.log("[Clickpoint Guide Failure] " + e)
	}
}

function wiki_previewupdate(i) {//Updates and displays the key clickpoints popup
	click()
	if (i == -1) {
		document.getElementById("preview_wrapper").style.display = "none";
		document.body.classList.remove("noscroll")
		return;
	}
	document.getElementById("preview").src = 'Clickpoint Guides/' + i + '.html'
	document.getElementById("preview_wrapper").style.display = "block"
	document.body.classList.add("noscroll")
}

//=============================
//=============================Note Functions
//=============================
function note_input() {//Attempts to find and save keys within the note block's data
	var content = document.getElementById("note_input").value
	var lkeys = content.match(/[1-8] - [\w]{12}/g)
	if (lkeys !== null) {lkeys.forEach(function (a) {data.note.keys[a.slice(0,1)] = a.slice(4,16)})}
	document.getElementById("note_keyoutput").innerHTML = `<b>Key Data</b><br>${data.note.keys.join("").substr(0,48)}<br>${data.note.keys.join("").substr(48,48)}`
	if (data.note.keys.indexOf("????????????") == -1) {document.getElementById("note_keyoutput").innerHTML = `<b>Master Key</b><br><span class="select-all">${data.note.keys.join("")}</span>`}
	if (data.popup.notes.active == 1) {
		data.popup.notes.reference.document.getElementById("content").innerHTML = content
	}
}

//=============================
//=============================Wifi Functions
//=============================
function wifi_passwordinput(i,p) {//Updates wifi label if password is provided
	data.wifi.passwords[i] = p
	document.getElementById("wifi_listbutton" + i).innerHTML = "<i class='" + ((data.wifi.passwords[i] !== "") ? 'icon-check-square':'icon-square') + "'></i> " + wifidata[i]["name"]
}

function wifi_timerupdate() {//Updates wifi timers and cooldowns
	data.wifi.cooldowns = data.wifi.cooldowns.map(function(v,i){
		if (v != 0 && i != data.wifi.timer[1]) {
			if (--v == 0) {
				data.wifi.timerlive[i] = data.wifi.timerfull[i]
				//console.log(`The cooldown for network ${wifidata[i].name} has reached ${v} seconds!`)
			}
		}
		return v
	})
	if (data.wifi.timer[2] != 0) {
		data.wifi.timer[2] -= 1
		data.wifi.timerlive[data.wifi.timer[1]] = data.wifi.timer[2]
		if (data.wifi.timer[2] == 60) {data.general.beep.play()}
		if (data.wifi.timer[2] == 0) {
			//timerpausebutton("No Timer Active")
			//Should this call disconnect or restart the timer?
				//Let's say restart, but it should be on advanced mode ONLY, otherwise it should just halt
		}
	}
	wifi_timerdisplay()
}

function wifi_timerdisplay() {//This function updates dynamic displays of the wifi timers
	var timer = data.wifi.timer
	var string = "###########################"
	var a = "[" + timer[4] + string.slice(timer[4].length) + timeformat(timer[2]) + string.slice(timer[5].length) + timer[5] + "]"
	var b = Math.ceil((timer[2]/timer[3]*100)/(100/a.length))
	var c = '<span class="secondary">' + a.slice(0,a.length - b) + '</span>' + a.slice(a.length - b)
	document.getElementById("wifi_timer").innerHTML = c
	document.getElementById("wifi_summary").innerHTML = `[True Time ${timeformat(data.wifi.timerlive[data.wifi.current])}] [Cool Time ${timeformat(data.wifi.cooldowns[data.wifi.current])}]`
	if (data.popup.wifi.active == 1) {
		data.popup.wifi.reference.document.getElementById("content").innerHTML = c
	}
}

function wifi_wifijoin(d) {//Updates wifi timer (onjoin)
	if (data.wifi.timer[0] == 0) {wifi_timersetup(d)}
	var i = data.wifi.current
	var f = data.wifi.timerfull[i]
	var l = data.wifi.timerlive[i]
	data.wifi.timer = [data.wifi.timer[0],i,l,f,wifidata[i].name,""]
	wifi_timerpausebutton("Pause Timer")
	data.wifi.cooldowns[i] = 300
	wifi_timerdisplay()
	click()
}

function wifi_wifileave() {//Updates wifi timer (onleave)
	if (data.wifi.timer[0] == 2) {
		data.wifi.timerlive[data.wifi.timer[1]] = Math.floor(data.wifi.timerlive[data.wifi.timer[1]] * 0.7)
	}
	data.wifi.timer = [data.wifi.timer[0],-1,0,0,"",(data.wifi.reference == undefined) ? "PAUSED":"DISCONNECTED"]
	wifi_timerdisplay()
}

function wifi_timersetup(d) {//Prepares wifi timer arrays on first join event
	data.wifi.timer[0] = d
	wifidata.forEach(function(v,i){
		var t = v.track.time
		if (data.wifi.timer[0] == 2) {t = Math.floor(t * 0.7)}
		data.wifi.timerfull[i] = t
		data.wifi.timerlive[i] = t
	})
	//document.getElementById(`wifi_button${(d == 1) ? 2:1}`).style.display = "none"
	data.wifi.reference = setInterval(wifi_timerupdate,1000)
}

function wifi_timerpause() {//Pauses wifi timer
	if (data.wifi.timer[0] != 0) {
		if (data.wifi.reference == undefined) {
			data.wifi.reference = setInterval(wifi_timerupdate,1000)
			data.wifi.timer[5] = (data.wifi.timer[1] == -1) ? "DISCONNECTED":""
			wifi_timerpausebutton("Pause Timer")
		} else {
			data.wifi.reference = clearInterval(data.wifi.reference)
			data.wifi.timer[5] = "PAUSED"
			wifi_timerpausebutton("Resume Timer")
		}
		wifi_timerdisplay()
	}
}

function wifi_timerpausebutton(x) {//Modifies the text displayed on the wifi pause button
	document.getElementById("wifi_button3").innerHTML = x
	data.wifi.button = x
}

function wifi_update(i) {//Changes the current wifi page
	click()
	var v = wifidata[i]
	data.wifi.current = i
	document.getElementById("wifi_data").innerHTML = `
<h2>${v.name}</h2>
<table>
	<tbody>
		<tr><td>Position</td><td>${["Desk","Window","Bedside","Balcony","Bedside/Balcony"][v.position]}</td></tr>
		<tr><td>Dongle level</td><td>Level ${v.range} Required</td></tr>
		<tr><td>Security</td><td>${["Unsecured","WEP","WPA","WPA2"][v.level]}</td></tr>
		<tr><td>Track Rate (Normal)</td><td>${timeformat(v.track.time) + "<sub> (" + timeformat(v.track.time*2) + " In Game)</sub>"}</td></tr>
		<tr><td>Track Rate (1337)</td><td>${timeformat(Math.floor(v.track.time*0.7)) + "<sub> (" + timeformat(Math.floor(v.track.time*0.7)*2) + " In Game)</sub>"}</td></tr>
		<tr><td>Track Chance</td><td>${v.track.chance}%</td></tr>
		<tr><td>Loading Speed</td><td>${(v.connection.ping*0.2*[0.95,0.9,0.85,0.8,0.75][["B","BP","G","N","AC"].indexOf(v.connection.type)]).toFixed(2)}~ Seconds</td></tr>
		<tr><td>Channel</td><td>${v.channel}</td></tr>

		${(v.level == 1) ? `
		<tr><td>Port Range</td><td>${v.probe.port}</td></tr>`:``}
		${(v.level >= 2) ? `
		<tr><td>Inject Limit</td><td>${v.inject.count}</td></tr>
		<tr><td>Inject Cooldown</td><td>${v.inject.wait}s</td></tr>
		<tr><td>Inject Success Range</td><td>${v.inject.total}</td></tr>
		<tr><td>Inject Crash Time</td><td>${v.inject.crash}s</td></tr>`:``}
		${(v.secret) ? `
		<tr><td colspan="2">This wifi is not available by normal means as the network BSSID cannot be found using SkyBreak</td></tr>`:``}
	</tbody>
</table>

<div class="block_inputwrapper" style="bottom:30px">
	<div style="border:1px solid gray;align-content:center;">
		<p id="wifi_summary">[True Time ${timeformat(data.wifi.timerlive[data.wifi.current])}] [Cool Time ${timeformat(data.wifi.cooldowns[data.wifi.current])}]</p>
	</div>
	<div>
		<input id="wifi_passwordinput" type="text" maxlength="20" oninput="wifi_passwordinput(${i},this.value)" placeholder="${(v.level == 0) ? `Unsecured Network...`:`Password...`}" ${(v.level == 0) ? `disabled`:``}>
	</div>
	<div>
		<button id="wifi_button1" onclick="wifi_wifijoin(1)">Start Wifi Timer</button>
		<button id="wifi_button2" onclick="wifi_wifijoin(2)">Start 1337 Timer</button>
	</div>
	<div>
		<button id="wifi_button3" onclick="wifi_timerpause()">${data.wifi.button}</button>
		<button id="wifi_button4" onclick="wifi_wifileave()">Disconnect</button>
	</div>
</div>`
	document.getElementById("wifi_passwordinput").value = data.wifi.passwords[i]
}

function timeformat(i) {
	return String(Math.abs(Math.floor(i/60))).padStart(2,'0') + ":" + String(Math.abs(Math.floor(i%60))).padStart(2,'0')
}

//=============================
//=============================Tenant Functions
//=============================
function tenant_input(i,p) {//Updates tenant label if room number is provided
	data.tenant.rooms[i] = p
	tenant_display()
}

function tenant_toggle(i) {//Updates tenant label and button if tenant is marked unavailable
	click()
	data.tenant.availability[i] = (data.tenant.availability[i]) ? 0:1;
	document.getElementById("tenant_button1").innerHTML = (data.tenant.availability[i]) ? `Mark Tenant Unavailable`:`Mark Tenant Available`
	tenant_display()
}

function tenant_display() {
	document.getElementById("tenant_listbutton" + i).innerHTML = "<i class='" + ((data.tenant.availability[i] == 0) ? 'icon-minus-square':(data.tenant.rooms[i] == "") ? 'icon-square':'icon-check-square') + "'></i> " + tenantdata[i]["name"]
}

function tenant_update(i) {//Changes the currently displayed tenant page
	click()
	var v = tenantdata[i]
	document.getElementById("tenant_data").innerHTML = `
<h2>${v.name}</h2>
<table>
	<tbody>
		<tr><td>Age</td><td>${v.age}</td></tr>
		<tr><td>Sex</td><td>${["Male","Female"][v.sex]}</td></tr>
		<tr><td>Doll Maker</td><td>${["Invalid","Valid"][v.doll]}</td></tr>
		<tr><td colspan="2">Note: ${v.note}</td></tr>
	</tbody>
</table>

<div class="block_inputwrapper" style="bottom:200px">
	<div>
		<input id="tenant_roominput" type="text" maxlength="20" oninput="tenant_input(${i},this.value)" placeholder="Tenant room number..." ${(v.doll == 0) ? `disabled`:``}>
	</div>
	<div>
		<button id="tenant_button1" onclick='tenant_toggle(${i})' style="bottom:200px;" ${(v.doll == 0) ? `disabled`:``}>${(v.doll == 0) ? `Invalid Doll Maker Target`:data.tenant.availability[i] ? `Mark Tenant Unavailable`:`Mark Tenant Available`}</button>
</div>`
	document.getElementById("tenant_roominput").value = data.tenant.rooms[i]
}

//=============================
//=============================Info Block Functions
//=============================
function info_update(i) {//Change info page
	click()
	document.getElementById(`info_guide${data.info.current}`).style.display = "none"
	document.getElementById(`info_guide${i}`).style.display = "block"
	data.info.current = i
}

function setcolor(i,c) {//Updates the site color configuration in memory
	localStorage.setItem(`color${i}`,c)
	document.getElementById("dom_color").innerHTML = `body {color:hsl(${localStorage.getItem('color0')},100%,50%)} .simplebar-scrollbar::before {background-color:hsl(${localStorage.getItem('color0')},100%,50%)} .child {color:hsl(${localStorage.getItem('color0')},100%,30%)} .secondary {color:hsl(${localStorage.getItem('color1')},100%,50%)} .disabled {color:hsl(${localStorage.getItem('color1')},100%,20%)}`
}


//==================Lucas Simulator
function simulator_launch() {//Makes the simulator visible
	click()
	document.getElementById("sim_wrapper").style.display = "block"
}

function simulator_toggle() {//Starts and stops the simulator
	click()
	if (data.simulator.active) {
		document.getElementById("sim_start").innerHTML = "Start Simulation"
		clearTimeout(data.simulator.reference)
	} else {
		document.getElementById("sim_start").innerHTML = "End Simulation"
		data.simulator.reference = setTimeout(simulator_playsound,5000)
	}
	data.simulator.active = (data.simulator.active) ? 0:1;
}

function simulator_playsound() {//Plays the doorknob sound cue and waits for result
	data.simulator.sound1.play();
	data.simulator.soundplayed = 1
	data.simulator.reference = setTimeout(simulator_evaluate,10000)
}

function simulator_evaluate() {//Checks if the player acknowledged the sound cue
	if (data.simulator.soundplayed == 1) {
		data.simulator.soundplayed = 0
		data.simulator.sound2.play()
		simulator_display(`<span class="secondary"><i class="fa fa-times"></i> You have died</span>`)
		setTimeout(function () {simulator_display("Hitman Trainer")},180000)
	}
	data.simulator.reference = setTimeout(simulator_playsound,(Math.floor(Math.random() * 11) * 30000) + 600000)
}

function simulator_verify() {//Tells the player if they correctly responded to a sound cue
	if (data.simulator.soundplayed == 1) {
		var a = `<i class="fa fa-check"></i> Correct`
		data.simulator.soundplayed = 0
	} else {
		var a = `<span class="secondary"><i class="fa fa-times"></i> Incorrect</span>`
	}
	simulator_display(a)
	setTimeout(function () {simulator_display("Hitman Trainer")},10000)
}

function simulator_hide() {//Toggles visibility of the simulator
	click()
	document.getElementById("sim_div").style.visibility = (data.simulator.visible) ? "hidden":"visible"
	data.simulator.visible = (data.simulator.visible) ? 0:1
}

function simulator_display(x) {//Modifies the simulator header
	document.getElementById("sim_title").innerHTML = x
}

//=============================
//=============================Other
//=============================
function tipupdate() {//Updates the displayed tip
	document.getElementById("tips").innerHTML = '[Tip] ' + tips[Math.floor(Math.random() * tips.length)]
}
setInterval(tipupdate,10000)

/*
function serversidesecret() {
	//Became obsolete after scrapping of backdoor concept
	return "1E\7lA2#bp@UV)M2Do&+"
}
*/

function setup() {//Prepares website lists and appearance
	wifidata.forEach(function (data,index) {
		var button = document.createElement("button")
		document.getElementById("wifi_list").appendChild(button)
		button.outerHTML = `<button id="wifi_listbutton${index}" onclick="wifi_update(${index})">${"<i class='" + ((data["level"] == 0) ? 'icon-square-o':'icon-square') + "'></i> " + data.name}</button>`
	})
	tenantdata.forEach(function (data,index) {
		var button = document.createElement("button")
		document.getElementById("tenant_list").appendChild(button)
		button.outerHTML = `<button id="tenant_listbutton${index}" onclick="tenant_update(${index})">${"<i class='" + ((data["doll"] == 0) ? 'icon-square-o':'icon-square') + "'></i> " + data.name}</button>`
	})
	document.querySelectorAll("#info_data > div").forEach(function (element,index) {
		element.id = `info_guide${index}`
		var attributes = element.attributes
		if (attributes.getNamedItem("title") == null) {return}
		var button = document.createElement("button")
		document.getElementById("info_list").appendChild(button)
		button.outerHTML = `<button onclick="info_update(${index})"><i class="${attributes.getNamedItem("icon").value}"></i> ${attributes.getNamedItem("title").value}</button>`
	})
	if (localStorage.getItem('color0') == undefined) {localStorage.setItem('color0',120)}
	if (localStorage.getItem('color1') == undefined) {localStorage.setItem('color1',0)}
	document.getElementById("setting_colorprimary").value = localStorage.getItem('color0')
	document.getElementById("setting_colorsecondary").value = localStorage.getItem('color1')
	document.getElementById("dom_color").innerHTML = `body {color:hsl(${localStorage.getItem('color0')},100%,50%)} .simplebar-scrollbar::before {background-color:hsl(${localStorage.getItem('color0')},100%,50%)} .child {color:hsl(${localStorage.getItem('color0')},100%,30%)} .secondary {color:hsl(${localStorage.getItem('color1')},100%,50%)} .disabled {color:hsl(${localStorage.getItem('color1')},100%,20%)}`
	document.getElementById("animated").style = "animation:slide 1s 0.3s forwards"
	var x = new XMLHttpRequest()
	x.onreadystatechange = function() { 
		if (x.readyState == 4 && x.status == 200) {
			var d = JSON.parse(x.responseText)
			document.getElementById("version").innerHTML = `<i>Wttg Assistant Version 1.4.0.${d[0].sha.slice(0,7)}</i>`
		}
	}
	x.open("GET","https://api.github.com/repos/fiercethundr/wttg2-assistant/commits?per_page=1",true)
	x.send()
}

function click() {//Plays the click sound
	data.general.click.currentTime = 0
	data.general.click.play()
}

function sitecycle() {//Temporary dev function (Cycle through clickpoint guides)
	sitepreview(window.temp)
	window.temp++
}
