const dirs = {
	path: '/',
	subdirs: [
		{
			path: 'src',
			subdirs: [
				{
					path: 'src/styles',
					subdirs: [
						{
							path: 'src/styles/components',
							subdirs: [],
							files: [
								'avatar',
								'button',
								'card',
								'checkbox',
								'input',
								'radio',
								'sidenav',
								'switch',
								'tab',
							],
						},
					],
					files: ['main', 'typography'],
				},
			],
			files: [],
		},
	],
	files: ['tailwind.config'],
};

module.exports = dirs;
