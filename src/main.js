#!/usr/bin/env node

import { Command } from 'commander';
import container from './diContainer';


const program = new Command();

program
  .command('update-splash')
  .description('Update the splash screen')
  .requiredOption('-d, --directory <projectDirectory>', 'Directory where the project is located')
  .requiredOption('-s, --splash <splash>', 'Path to the new splash screen')
  .option('--platform <platform>', 'Specify platform (android, ios)')
  .action((options) => {
    const updateSplashCommand = container.get('UpdateSplashCommand');
    updateSplashCommand.execute(options);
  });


program.parse(process.argv);
