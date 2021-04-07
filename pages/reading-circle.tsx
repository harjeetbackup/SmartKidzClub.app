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
                src='pics/rc/skc_reading_circle_logo.png'
                className='dReadingClubLogo'
                alt='SKC Reading Circle Logo'
              />
              <img
                src='pics/rc/child_graphic.png'
                className='dReadingClubChild'
                alt='SKC Reading Circle Logo'
              />

              <a
                className='dForm'
                href='https://docs.google.com/forms/d/e/1FAIpQLSctlMeVJst_n-TShgPgJtLGBTWInYCEwknoekhcvnsDJZVTtQ/viewform'
                target='_blank'
              >
                <img src='pics/rc/dButton01.png' className='dButton01' />
              </a>
            </div>

            <div className='dContainer'>
              <div className='dTeacherInfo2'>
                <div className='dTeacherDetails2'>
                  <p className='dFontSCG dLedBy'>
                    VIRTUAL
                    <br />
                    <span className='dNormalFont'>(via ZOOM)</span>
                  </p>
                  <p>
                    <b>
                      Led by US/Canada based Teachers, Authors, Storytellers,
                      Literacy Ambassadors
                    </b>
                  </p>
                </div>
              </div>
              <div className='dSessions'>
                <div className='dSession0'>
                  <p className='dFontSCG dJr'>Toddlers</p>
                  <p className='dSessionDetails'>(2&#8210;4 yrs)</p>
                </div>
                <div className='dSession1'>
                  <p className='dFontSCG dJr'>Juniors</p>
                  <p className='dSessionDetails'>(5&#8210;7 yrs)</p>
                </div>
                <div className='dSession2'>
                  <p className='dFontSCG dJr'>Seniors</p>
                  <p className='dSessionDetails'>(8&#8210;10 yrs)</p>
                </div>
              </div>
            </div>
            <div className='dLargeText'>
              <p>
                Smart Kidz Club's Reading Circles are children's book clubs and
                will be led by teachers, author, and storytellers with the goal
                for children to engage in reading books, fun activities, quizzes
                and conversations around related and relevant themes. In
                addition to building up knowledge, here's what your child will
                gain:
              </p>
              <table className='dReadingClubTable'>
                <tr>
                  <td>
                    <img src='pics/rc/bullet01.png' />
                    &#160;&#160;
                  </td>
                  <td>
                    Learn active participation as well as passive listening and
                    observing
                  </td>
                </tr>
                <tr>
                  <td className='dNoWrap'>
                    <img src='pics/rc/bullet02.png' />
                    &#160;&#160;
                  </td>
                  <td>Learn group interactions and dynamics amongst peers</td>
                </tr>
                <tr>
                  <td>
                    <img src='pics/rc/bullet03.png' />
                    &#160;&#160;
                  </td>
                  <td>Learn to develop positive relationships with peers</td>
                </tr>
                <tr>
                  <td>
                    <img src='pics/rc/bullet01.png' />
                    &#160;&#160;
                  </td>
                  <td>Learn to communicate feelings appropriately</td>
                </tr>
                <tr>
                  <td>
                    <img src='pics/rc/bullet02.png' />
                    &#160;&#160;
                  </td>
                  <td>
                    Age appropriate discussions around specific themes each week
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src='pics/rc/bullet03.png' />
                    &#160;&#160;
                  </td>
                  <td>Self confidence and early exposure to public speaking</td>
                </tr>
              </table>
              <p>
                These virtual sessions will be conducted the same time every
                week. Parents can relax and let their child engage in a
                fun-filled and intellectually stimulating time with a fun and
                trusted adult instructor.
              </p>
              <p>
                Bring a friend along to double the fun. Sign up{' '}
                <a className="dTextLink"
                  href='https://docs.google.com/forms/d/e/1FAIpQLSctlMeVJst_n-TShgPgJtLGBTWInYCEwknoekhcvnsDJZVTtQ/viewform'
                  target='_blank'
                >
                  here
                </a>{' '}
                to receive information about upcoming sessions.
              </p>
              <p>&#160;</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
