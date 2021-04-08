import sc from 'styled-components';

export const AgeGroup = sc.p`
  color: green;
`;

export default sc.div`
 .container{
   
 }
body{background:#ebebeb !important; padding:0 !important;}

div.container{max-width:1024px;width:100%;margin:0 auto;}
 
.white_container{background:#fff; padding:25px;}


.inner_img{float: right; margin: 0 0 4% 4%; max-width:100%; max-height:350px;}
.inner_txt p{font-size: 15px; font-family: 'RobotoRegular'; line-height:20px; color:#585858; margin-bottom:15px; vertical-align:top;}
.dReadingClub .dLargeText p, table.dReadingClubTable td{font-size: 18px!important; font-family: 'RobotoRegular'; line-height:normal; color:#585858; margin-bottom:15px; vertical-align:top;}
.dReadingClub .dLargeText{background:white;padding-top:20px;}

.inner_txt a, .inner_txt a:visited,.inner_txt a:hover,.inner_txt a:active{-webkit-backface-visibility:hidden; backface-visibility:hidden; position:relative; transition:0.5s color ease; text-decoration:none;}

.inner_txt div.dMidSection{transform:none; display:inline-block; width:100%;text-align:center;margin:10px auto;}
.inner_txt div.dMidSection a{display:inline-block;}

.dReadingClub a.dTextLink{color:#138cce;font-family:'RobotoRegular'!important;text-decoration:underline;}
 
}


/* Reading Club styles (Find .dReadingClub in the CSS file) -Start */
.dReadingClub{background-image:url('pics/rc/ReadingClubBack.png');}
.dReadingClubLogo{float: right; margin: 0 0 0 2%; max-width:100%; max-height:365;}
.dReadingClubChild{float: left; margin: 0 2% 0 0; max-width:100%; max-height:365px;}

.dReadingClub .dContainer{width:100%;display:table;}
.dReadingClub .dContainer .dTeacherInfo{width:330px;height:250px;float:left;background-color:rgba(129,85,115,0.5);border-radius: 10px;padding: 25px 10px;box-shadow: 5px 5px 10px #606060;}
.dReadingClub .dContainer .dTeacherInfo2{width:330px;height:180px;float:left;background-color: rgba(167,215,224,0.5);border-radius: 10px;padding:10px;box-shadow: 5px 5px 10px #606060;background-image:url('pics/dWhiteBoard.pngX');margin-bottom:20px;}

.dReadingClub .dContainer .dSessions{display:table-cell;vertical-align:middle;font-family:ShowcardGothic;margin-right:40px;text-align:center;}
.dReadingClub .dContainer .dPic{width:100px;float:left;margin-right:10px;}
.dReadingClub .dContainer .dPic img{margin:0 0 10px 5px;}
.dReadingClub .dContainer .dPic img.dTeacherPic{border:2px solid white;box-shadow: 2px 2px 10px #000;}
.dReadingClub .dContainer .dTeacherDetails{float:left;border:0px solid blue;margin-left:15px;opacity:1!important;}
.dReadingClub .dContainer .dTeacherDetails p{color:black;font-size:17px;text-shadow:1px 1px 15px #fff;}
.dReadingClub .dContainer .dTeacherDetails .dTeacherName{font-size:18px;}
.dReadingClub .dContainer .dTeacherDetails2{margin:0 auto;text-align:center;width:100%;border:0px solid blue;opacity:1!important;}
.dReadingClub .dContainer .dTeacherDetails2 p.dLedBy{font-size:40px!important;padding:10px 10px 0 10px;text-shadow: 2px 5px 10px #fff;color:#585858;margin: 0 auto; text-align:center;margin-bottom:10px;}
.dNormalFont{font-family:'RobotoRegular';font-size:20px;}
.dReadingClub .dContainer .dTeacherDetails2 p{color:#585858;margin: 0 auto; text-align:center;font-size:20px;line-height:25px;text-shadow:1px 1px 15px #fff;}
.dReadingClub .dContainer .dTeacherDetails2 .dTeacherName{font-size:18px;}
.dReadingClub .dContainer .dSocialMedia{width:100%;float:left;}
.dReadingClub .dContainer .dSessions .dSession0, .dReadingClub .dContainer .dSessions .dSession1, .dReadingClub .dContainer .dSessions .dSession2{width:180px;height:120px;border-radius: 10px;padding:10px;margin: 0px 10px;text-align:center;box-shadow: 5px 5px 10px #606060;display:inline-grid;}
.dReadingClub .dContainer .dSessions .dSession0{background-color:rgba(157,112,142,0.5);}
.dReadingClub .dContainer .dSessions .dSession1{background-color:rgba(212,147,143,0.5);}
.dReadingClub .dContainer .dSessions .dSession2{background-color:rgba(123,149,46,0.5);margin-bottom:0;}
.dFontSCG{font-family:ShowcardGothic!important;}
.dReadingClub img.dIcon1,.dReadingClub img.dIcon2{display:block;text-align:center;margin:0 auto;}

.dJr,.dSr{font-size:30px!important;padding:15px 10px 5px 10px;text-shadow: 2px 5px 10px #fff;}
.dSessionDetails{font-family:RobotoCondensedRegular!important;font-size:28px!important;padding:5px;text-shadow: 1px 2px 10px #fff;}
.dSessionPrice{font-family:dRoboBlack!important;font-size:30px!important;padding:5px 5px 0 5px;font-weight:bold;text-shadow: 1px 2px 20px #fff;}
.dRegister{font-family:RobotoCondensedRegular!important;font-size:30px!important;padding:10px 0 15px 0;font-weight:bold;margin-bottom:0!important;border-radius: 10px;}
.dRegister a{text-decoration:none;color:#fff!important;}
.dRegister1{background-color:#dc8c87;}
.dRegister2{background-color:#92ac42;}
.dReadingClub .dDate{font-family:RobotoCondensedRegular!important;font-size:40px!important;text-align:center;}
.dReadingClub .dDay{font-family:RobotoCondensedRegular!important;font-size:30px!important;text-align:center;line-height:normal;}
table.dReadingClubTable{margin-bottom:10px;}
.dReadingClub .dButton{color:white;background-color:#e01e4e;padding:10px 20px;border-radius: 5px;}
.dReadingClub .dButton1{background-color:#dc8c87;}
.dReadingClub .dButton2{background-color:#92ac42;}
.dNoWrap{white-space:nowrap;}
/* Reading Club styles -End */




@media only screen and (min-width: 1024px)
{
.inner_txt div.dMidSection{display:block;text-align:right;padding-right:250px;margin:0 auto;}
}

@media screen and (max-width: 991px)
{
.inner_txt .inner_img{float: none; display: table; margin: auto; margin-bottom: 30px;}
.dReadingClub .dReadingClubLogo{float: none; display: table; margin: auto;}
.dReadingClub .dReadingClubChild{float: none; display: table; margin: auto;}
.dReadingClub .dContainer .dTeacherInfo, .dReadingClub .dContainer .dTeacherInfo2, .dReadingClub .dContainer .dSessions{float: none; display: table; margin: auto; margin-bottom: 10px;}


 
}

@media screen and (max-width: 767px)
{
.dReadingClub .dContainer .dSessions{margin:10px auto;}
.dReadingClub .dContainer .dSessions .dSession0,.dReadingClub .dContainer .dSessions .dSession1,.dReadingClub .dContainer .dSessions .dSession2{float: none; display: table; margin: auto; margin-bottom: 10px;width:330px;}
.dReadingClub .dContainer .dSessions .dSession2{margin-bottom:0;}

}


/******************joshi add and issue reolved***********************************/


.dFontRobotoBold{font-family:robotobold;}
.vTop{vertical-align:top;}
.vBtm{vertical-align:bottom;}



	
`;
