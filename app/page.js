import BlogList from './Components/BlogList';

const blogs = [
  {
    slug: 'jujutsu-kaisen-s1-e1',
    title: 'Jujutsu Kaisen - Season 1 Episode 1',
    image: '/ep2.jpg',
    summary: 'Yuji Itadori eats a cursed object to save his friends and becomes host to Sukuna.'
  },
  {
    slug: 'jujutsu-kaisen-s1-e2',
    title: 'Jujutsu Kaisen - Season 1 Episode 2',
    image: '/ep1.jpg',
    summary: 'Yuji faces the consequences of hosting Sukuna as he meets Satoru Gojo.'
  },
  {
    slug: 'jujutsu-kaisen-s1-e3',
    title: 'Jujutsu Kaisen - Season 1 Episode 3',
    image: '/ep15.jpg',
    summary: 'Yuji, Megumi, and Nobara begin their first mission together in a cursed building.'
  },
  {
    slug: 'jujutsu-kaisen-s1-e4',
    title: 'Jujutsu Kaisen - Season 1 Episode 4',
    image: '/ep14.jpg',
    summary: 'Yuji struggles with Sukuna’s power after losing control during battle.'
  },
  {
    slug: 'jujutsu-kaisen-s1-e5',
    title: 'Jujutsu Kaisen - Season 1 Episode 5',
    image: '/ep13.jpg',
    summary: 'Satoru Gojo showcases his domain expansion in a stunning fight between the legends.'
  },
  {
    slug: 'jujutsu-kaisen-s1-e6',
    title: 'Jujutsu Kaisen - Season 1 Episode 6',
    image: '/ep12.jpg',
    summary: 'Nobara proves her strength with her cursed technique in a fierce battle.'
  },
  {
    slug: 'jujutsu-kaisen-s1-e7',
    title: 'Jujutsu Kaisen - Season 1 Episode 7',
    image: '/ep11.jpg',
    summary: 'Gojo removes his blindfold and demonstrates the Six Eyes ability.'
  },
  {
    slug: 'jujutsu-kaisen-s1-e8',
    title: 'Jujutsu Kaisen - Season 1 Episode 8',
    image: '/ep10.jpg',
    summary: 'A new enemy appears as Mahito begins experimenting on human souls.'
  },
  {
    slug: 'jujutsu-kaisen-s1-e9',
    title: 'Jujutsu Kaisen - Season 1 Episode 9',
    image: '/ep9.jpg',
    summary: 'Yuji trains in secret under Kento Nanami while recovering from a mission.'
  },
  {
    slug: 'jujutsu-kaisen-s1-e10',
    title: 'Jujutsu Kaisen - Season 1 Episode 10',
    image: '/ep8.jpg',
    summary: 'Nanami battles Mahito underground and reveals his Ratio Technique which created damage .'
  },
  {
    slug: 'jujutsu-kaisen-s1-e11',
    title: 'Jujutsu Kaisen - Season 1 Episode 11',
    image: '/ep7.jpg',
    summary: 'Yuji and Nanami team up to confront Mahito in his twisted domain without exit.'
  },
  {
    slug: 'jujutsu-kaisen-s1-e12',
    title: 'Jujutsu Kaisen - Season 1 Episode 12',
    image: '/ep6.jpg',
    summary: 'Mahito’s domain clashes with Sukuna’s overwhelming presence of power.'
  },
  {
    slug: 'jujutsu-kaisen-s1-e13',
    title: 'Jujutsu Kaisen - Season 1 Episode 13',
    image: '/ep5.jpg',
    summary: 'The group reflects on the battles and prepares for the Kyoto exchange event.'
  },
  {
    slug: 'jujutsu-kaisen-s1-e14',
    title: 'Jujutsu Kaisen - Season 1 Episode 14',
    image: '/ep4.jpg',
    summary: 'The Kyoto Goodwill Event begins with a fierce powerful clash between schools.'
  },
  {
    slug: 'jujutsu-kaisen-s1-e15',
    title: 'Jujutsu Kaisen - Season 1 Episode 15',
    image: '/ep3.jpg',
    summary: 'Panda and Mechamaru reveal their true forms in an epic confrontation.'
  }
];


export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>Jujutsu Kaisen Blog</h1>
        <p>Explore all episodes and summaries</p>
      </div>

      <BlogList blogs={blogs} />

    </div>
  );
}
