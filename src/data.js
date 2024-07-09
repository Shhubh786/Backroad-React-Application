import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faSquarespace } from '@fortawesome/free-brands-svg-icons/faSquarespace'; 
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faHiking } from '@fortawesome/free-solid-svg-icons';
import { faSocks } from '@fortawesome/free-solid-svg-icons';
import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

export const pageLinks =[
{id:1, href:'#home', text:'home'},
{id:2, href:'#about', text:'about'},
{id:3, href:'#service', text:'services'},
{id:4, href:'#tours', text:'tours'},

];
export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon:faFacebook },
  { id: 2, href: 'https://www.twitter.com', icon: faTwitter},
  { id: 3, href: 'https://www.twitter.com', icon: faSquarespace },
];

export const services = [
    {
        id:1, 
        icon:faWallet,
        title:'saving money',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia'
    },
    {
    id: 2,
    icon: faHiking,
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 3,
    icon: faSocks,
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
];

export const tours =[
    {
        id:1,
        image:tour1,
        date:'october 11th, 2020',
        title:'explore hong kong',
        info:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location:'hong kong',
        duration:'8 days',
        cost:  5000
    },
      {
    id: 2,
    image: tour2,
    date: 'october 12h, 2020',
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'indonesia',
    duration: '11 days',
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'hong kong',
    duration: '8 days',
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'kenya',
    duration: '20 days',
    cost: 3300,
  },
  {
    id: 5,
    image: tour5,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'hong kong',
    duration: '8 days',
    cost: 5000,
  },
  {
    id: 6,
    image: tour6,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'kenya',
    duration: '20 days',
    cost: 3300,
  },
]

