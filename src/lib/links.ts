export type LinkIcon = 'email' | 'linkedin' | 'instagram' | 'blog';

export interface Link {
	label: string;
	handle: string;
	href: string;
	icon: LinkIcon;
}

export const profile = {
	name: 'Daniel Armenta',
	tagline: ''
};

// Edit these to point at your real accounts.
export const links: Link[] = [
	{
		label: 'Email',
		handle: 'danarmenta32@gmail.com',
		href: 'mailto:danarmenta32@gmail.com',
		icon: 'email'
	},
	{
		label: 'LinkedIn',
		handle: 'Daniel Armenta',
		href: 'https://www.linkedin.com/in/daniel-armenta-3413332a1/',
		icon: 'linkedin'
	},
	{
		label: 'Instagram',
		handle: '@darmenta32',
		href: 'https://www.instagram.com/darmenta32',
		icon: 'instagram'
	},
	{
		label: 'Blog',
		handle: 'blog.daniel-armenta.xyz',
		href: 'https://blog.daniel-armenta.xyz',
		icon: 'blog'
	}
];
