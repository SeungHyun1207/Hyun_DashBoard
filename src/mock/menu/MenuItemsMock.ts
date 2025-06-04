import { ReactNode } from 'react';
import ForumIcon from '@mui/icons-material/Forum';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export interface MenuItemType {
  id: string;
  label: string;
  path: string;
  icon?: ReactNode;
  children?: MenuItemType[];
}

export const menuItems: MenuItemType[] = [
  {
    id: 'menu-intro',
    label: 'Intro',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    id: 'menu-community',
    label: 'Community',
    path: '/community',
    icon: <ForumIcon />,
    children: [
      {
        id: 'menu-community-free',
        label: '자유게시판',
        path: '/community/free',
      },
      {
        id: 'menu-community-notice',
        label: '공지사항',
        path: '/community/notice',
      },
    ],
  },
  {
    id: 'menu-game',
    label: '게임',
    path: '/games',
    icon: <SportsEsportsIcon />,
    children: [
      {
        id: 'menu-game-maple',
        label: '메이플스토리',
        path: '/games/maple',
        icon: <EmojiEventsIcon />,
      },
      {
        id: 'menu-game-lol',
        label: '리그오브레전드',
        path: '/games/lol',
        icon: <SportsEsportsIcon />,
      },
      {
        id: 'menu-game-pokemon',
        label: '포켓몬 도감',
        path: '/games/pokemon',
        icon: <CatchingPokemonIcon />,
      },
    ],
  },
];
