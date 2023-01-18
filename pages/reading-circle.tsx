import Head from 'next/head';
import Wrapper from 'styles/pages/reading-circle';

export default function Page() {
  return (
    <>
      <Head>
        <title>Reading Clubs | SmartKidzClub Premium App</title>
      </Head>
      <Wrapper>
        <div className='container white_container'>
          <div className='inner_txt dReadingClub'>
            <div>
              <img
                src='pics/rc/skc_reading_circle_logo_OLD.png'
                className='dReadingClubLogo_Stage02'
                alt='SKC Reading Circle Logo'
              />
              <img
                src='pics/rc/fun_read_fridays.png'
                className='dReadingClubLogo_Stage02'
                alt=''
              />
							<table width='100%'>
								<tr>
								<td rowspan='2'>
									<img src='pics/rc/bottom01_01.png' className='dReadingClubLogo_Stage02' alt='' />
								</td>
								<td colspan='2'>
									<img src='pics/rc/bottom01_02.png' className='dReadingClubLogo_Stage02' alt='' />
								</td>
								<td rowspan='2'>
									<img src='pics/rc/bottom01_05.png' className='dReadingClubLogo_Stage02' alt='' />
								</td>
								</tr>
								<tr>
								<td>
									<a href='https://www.youtube.com/user/mysmartkidzclub/featured?view_as=public' target='_blank'><img src='pics/rc/bottom01_03.png' className='dReadingClubLogo_Stage02' alt='' /></a>
								</td>
								<td>
									<a href='https://www.facebook.com/smartkidzclub' target='_blank'><img src='pics/rc/bottom01_04.png' className='dReadingClubLogo_Stage02' alt='' /></a>
								</td>
								</tr>								
							</table>
            </div>

            <div className='dLargeText'>
              <p>
                Smart Kidz Club's Reading Circles are children's book clubs
                 led by teachers, authors, and storytellers with the goal
                for children to engage in reading books, fun activities, quizzes
                and conversations around related and relevant themes. Children will love this fun-filled time of reading and learning.
								<br/><br/>
								<b>FUN READ FRIDAYS!</b><br/>
								Start 10 February, 2023
              </p>
              <p>&#160;</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
