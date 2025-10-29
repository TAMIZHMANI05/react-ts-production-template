const config = {
    '*.{js,ts,tsx}': ['npm run lint:check', 'npm run format:check'],
    '*.css': ['npm run lint:stylelint:check', 'npm run format:check'],
    '*.{json,md,html,yml,yaml}': ['npm run format:check']
};

export default config;
