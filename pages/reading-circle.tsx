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

<div className='dRCTable'>
<div className='dRow'>
<div className='dCell'><img src='pics/rc/bottom01_01.png' /></div>
      <div className='dInTable'>
        <div className='dRow'>
          <div className='dCell'><img src='pics/rc/bottom01_02.png' /></div>
        </div>
        <div className='dRow'>
          <div className='dInTable'>
            <div className='dCell'><a href='https://www.youtube.com/@Smartkidzclub' target='_blank'><img src='pics/rc/bottom01_03.png' alt='' /></a></div>
            <div className='dCell'><a href='https://www.facebook.com/smartkidzclub' target='_blank'><img src='pics/rc/bottom01_04.png' alt='' /></a></div>
        </div>
        </div>
      </div>
<div className='dCell'><img src='pics/rc/bottom01_05.png' /></div>
</div>
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
								<br/><br/>Subscribe to our <a className='dAnchors' href='https://www.youtube.com/@Smartkidzclub' target='_blank'>YouTube</a> and <a className='dAnchors' href='https://www.facebook.com/smartkidzclub' target='_blank'>Facebook</a> channels to get notifications of when we go live.
              </p>
              <p>&#160;</p>
            </div>
          </div>
        </div>
				</div>
      </Wrapper>
    </>
  );
}
