#! /usr/bin/env node

// Module Imports
const fs = require('fs/promises');
const fsSync = require('fs');
const ejs = require('ejs');

// Constants
const dirs = require('./constants/directories');

// Create Directories
const create = async (dir) => {
	if (!fsSync.existsSync(`${process.cwd()}/${dir.path}`)) {
		await fs.mkdir(`${process.cwd()}/${dir.path}`);
	}

	// Create Files
	if (dir.files.length !== 0) {
		for (const file of dir.files) {
			if (
				!fsSync.existsSync(`${process.cwd()}/${dir.path}/${file}.css`)
			) {
				const template = await fs.readFile(
					`${__dirname}/templates/${file}.ejs`,
					'utf-8'
				);
				const render = ejs.render(template);
				if (file === 'tailwind.config') {
					await fs.writeFile(
						`${process.cwd()}/${dir.path}/${file}.js`,
						render
					);
				} else {
					await fs.writeFile(
						`${process.cwd()}/${dir.path}/${file}.css`,
						render
					);
				}
			}
		}
	}

	// Create Subdirectories
	if (dir.subdirs.length !== 0) {
		for (const subdir of dir.subdirs) {
			create(subdir);
		}
	}

	return;
};

// Start Creating Directories
create(dirs);
