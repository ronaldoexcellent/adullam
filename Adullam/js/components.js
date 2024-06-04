import header from './components/header.js';
import footer from './components/footer.js';
import nav from './components/nav.js';
import home from './components/home.js';
import school from './components/school.js';
import inspirations from './components/inspirations.js';
import SlideShow from './components/slideshow.js';
import quotes from './components/quotes.js';
import contact from './components/contact.js';
import RelatedArticles from './components/related_articles.js';
import RelatedVideos from './components/related_videos.js';

export default function spectronXComponents() {
    header(), footer(), nav(), home(), school(), inspirations(), SlideShow(), quotes(), contact(), RelatedArticles(), RelatedVideos();
}