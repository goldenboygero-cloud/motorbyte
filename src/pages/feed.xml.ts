import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  if (!context.site) {
    throw new Error('Configure the production site URL before building the RSS feed.');
  }

  const posts = await getCollection('blog');
  const items = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      author: post.data.author,
      categories: [post.data.category, ...post.data.tags],
    }));

  return rss({
    title: 'MotorByte | Stories from the world of cars',
    description: 'Automotive stories, opinions, and news from MotorByte.',
    site: context.site,
    items,
    customData: '<language>en-us</language>',
  });
};
