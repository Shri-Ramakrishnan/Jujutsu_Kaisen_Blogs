import { notFound } from 'next/navigation';

const blogs = [
  {
    slug: 'jujutsu-kaisen-s1-e1',
    title: '🌀 Jujutsu Kaisen Episode 1: "Ryomen Sukuna"',
    image: '/ep1c.jpg',
    content: `From the opening seconds, Jujutsu Kaisen plunges viewers into a dark, eerie atmosphere teeming with tension and supernatural intrigue. The episode introduces us to Yuji Itadori, a kind-hearted, athletic high schooler who avoids sports clubs and instead hangs out with his school's Occult Research Club.`
  },
  {
    slug: 'jujutsu-kaisen-s1-e2',
    title: '🔥 Jujutsu Kaisen Episode 2: "For Myself" - The Birth of a Sorcerer',
    image: '/ep2c.jpg',
    content: `Episode 2 wastes no time picking up from the cliffhanger. Satoru Gojo arrives and challenges Sukuna-Yuji to a quick but decisive battle. In mere moments, Gojo shows that even the King of Curses isn’t beyond his control. With a cheeky grin and unmatched confidence, he forces Yuji to switch back and renders him unconscious.`
  },
  {
    slug: 'jujutsu-kaisen-s1-e3',
    title: '⚔️ Jujutsu Kaisen Episode 3: "Girl of Steel"',
    image: '/ep3.jpg',
    content: `Yuji, Megumi, and Nobara head out on their first mission together to exorcise a curse in a deserted building. Nobara's fearless attitude and cursed hammer make a lasting first impression. Her loyalty and fierce resolve are tested when a young boy’s life is in danger. This episode introduces her backstory and further develops the team dynamics of the first-years.`
  },
  {
    slug: 'jujutsu-kaisen-s1-e4',
    title: '🎭 Jujutsu Kaisen Episode 4: "Curse Womb Must Die"',
    image: '/ep4.jpg',
    content: `The trio faces a cursed womb mission that's far beyond their level. Yuji's resolve is tested when things spiral out of control, pushing him to take drastic measures. The fight escalates, and Sukuna emerges when Yuji loses control. This episode is a tense, dark look into the power differences and risks of the jujutsu world.`
  },
  {
    slug: 'jujutsu-kaisen-s1-e5',
    title: '🌌 Jujutsu Kaisen Episode 5: "Fearsome Womb"',
    image: '/ep5.jpg',
    content: `Sukuna asserts dominance in a terrifying display of raw power.     Yuji, trapped inside his own body, negotiates with the curse. Meanwhile, Megumi reflects on what it means to be a jujutsu sorcerer. The tone is dark and introspective, setting up character arcs for future episodes.`
  },
  {
    slug: 'jujutsu-kaisen-s1-e6',
    title: '👊 Jujutsu Kaisen Episode 6: "After Rain"',
    image: '/ep6.jpg',
    content: `Gojo takes Yuji under his wing and starts training him while keeping him hidden from the higher-ups. The episode introduces Kento Nanami and sets the stage for the upcoming Kyoto Sister School Exchange Event. A moment of calm before the storm, but tension continues to build.`
  },
  {
    slug: 'jujutsu-kaisen-s1-e7',
    title: '🌀 Jujutsu Kaisen Episode 7: "Assault"',
    image: '/ep7.jpg',
    content: `Gojo faces off against Jogo, one of the special grade curses. For the first time, we see Gojo unleash his Limitless technique and Domain Expansion. His sheer power completely overwhelms his opponent. A visually stunning episode that establishes Gojo as a top-tier sorcerer.`
  },
  {
    slug: 'jujutsu-kaisen-s1-e8',
    title: '👹 Jujutsu Kaisen Episode 8: "Boredom"',
    image: '/ep8.jpg',
    content: `While the main characters rest, the Kyoto school students are introduced. Tensions rise as the rivalry between the schools becomes clear. Meanwhile, Mahito begins his twisted experiments, bringing a new level of creepiness to the series.`
  },
  {
    slug: 'jujutsu-kaisen-s1-e9',
    title: '🧪 Jujutsu Kaisen Episode 9: "Small Fry and Reverse Retribution"',
    image: '/ep9.jpg',
    content: `Nanami and Yuji investigate a series of gruesome deaths linked to Mahito. Nanami's cool-headed nature and experience contrast with Yuji’s passion and inexperience. Their dynamic is compelling, and we get deeper insight into the moral ambiguity of curses and humans.`
  },
  {
    slug: 'jujutsu-kaisen-s1-e10',
    title: '🔥 Jujutsu Kaisen Episode 10: "Idle Transfiguration"',
    image: '/ep10.jpg',
    content: `Mahito's cursed technique is revealed in all its horror. The fight between him and Nanami begins, filled with philosophical banter and brutal action. Meanwhile, Yuji reflects on what it means to kill for justice. A heavy, emotionally resonant episode.`
  },
  {
    slug: 'jujutsu-kaisen-s1-e11',
    title: '💥 Jujutsu Kaisen Episode 11: "Narrow-minded"',
    image: '/ep11.jpg',
    content: `Yuji and Nanami continue their assault on Mahito. Yuji confronts a transfigured human and is faced with a brutal moral choice. Mahito grows stronger mid-battle, using the opportunity to push Yuji toward a mental breaking point.`
  },
  {
    slug: 'jujutsu-kaisen-s1-e12',
    title: '⚰️ Jujutsu Kaisen Episode 12: "To You, Someday"',
    image: '/ep12.jpg',
    content: `The battle reaches its peak. Sukuna interferes when Mahito oversteps, punishing him for touching his soul. Yuji emerges more mature, having faced true despair. The episode ends on a reflective note, with Yuji more determined than ever.`
  },
  {
    slug: 'jujutsu-kaisen-s1-e13',
    title: '🌸 Jujutsu Kaisen Episode 13: "Tomorrow"',
    image: '/ep13.jpg',
    content: `After the intense battle, Yuji reunites with Megumi and Nobara. They resume missions, confronting their growing fears and bonding as teammates. It’s a moment of balance between character growth and pacing before major arcs unfold.`
  },
  {
    slug: 'jujutsu-kaisen-s1-e14',
    title: '🏯 Jujutsu Kaisen Episode 14: "Kyoto Sister School Exchange Event - Group Battle 0"',
    image: '/ep14.jpg',
    content: `The Kyoto event begins. The schools clash in a showcase of technique and teamwork. Yuji surprises everyone by making a bold entrance. Tension runs high between him and some Kyoto students, especially Todou.`
  },
  {
    slug: 'jujutsu-kaisen-s1-e15',
    title: '🐼 Jujutsu Kaisen Episode 15: "Kyoto Sister School Exchange Event - Group Battle 1"',
    image: '/ep15.jpg',
    content: `Panda takes center stage and battles Mechamaru. Their clash reveals unexpected emotional depth behind both characters. The animation and storytelling shine in this episode, showing how JJK gives even side characters the spotlight.`
  }
];

export default function BlogDetails({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) notFound();
  
  return (
    <div className="blog-details">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.content}</p>
    </div>
  );
}
