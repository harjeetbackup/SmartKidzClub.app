import Grid, { GridCell } from 'components/core/grid';
import useGotoRoute from 'hooks/goto-route';
import { IAuth } from 'models';
import { useAuthUser, withAuthUser } from 'next-firebase-auth';
import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';
import Wrapper, {
  ActionButton,
  Actions,
  Logo,
  LogoSmall,
  Menu,
  MenuItem,
  Profile,
} from './style';

function Header() {
  const gotoUrl = useGotoRoute();
  const auth = useAuthUser() as IAuth;
  const [hover, setHover] = useState(false);

  return (
    <Wrapper>
      <Grid
        areas={{
          xs: ['img ./2 actions'],
          m: ['. img/4 actions/4 .'],
          l: ['./2 img/4 actions/4 ./2'],
        }}
      >
        <GridCell area='img' className='img'>
          <Link href='/'>
            <a>
              <Logo src='brand.png' alt='Smart Kidz Club Home' />
              <LogoSmall src='brand-small.png' alt='Smart Kidz Club Home' />
            </a>
          </Link>
        </GridCell>
        <Actions area='actions'>
          {auth?.id ? (
            <>
              <Profile
                tabIndex={0}
                onFocus={() => setHover(true)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                📚 Profile
                {hover && (
                  <Menu>
                    <MenuItem
                      onClick={() => {
                        setHover(false);
                        gotoUrl && Router.push(gotoUrl);
                      }}
                    >
                      <button type='button'>
                        🙂 <span>Account</span>
                      </button>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setHover(false);
                        auth.signOut();
                        Router.push('/');
                      }}
                    >
                      <button type='button'>
                        🚪 <span>Sign out</span>
                      </button>
                    </MenuItem>
                  </Menu>
                )}
              </Profile>
            </>
          ) : (
            <ActionButton
              colorProfile='secondary'
              onClick={() => {
                setHover(false);
                gotoUrl && Router.push(gotoUrl);
              }}
            >
              <span className='icon'>📚</span>
              <span className='title'>Subscribe | Sign In</span>
            </ActionButton>
          )}
        </Actions>
      </Grid>
    </Wrapper>
  );
}

export default withAuthUser()(Header);
