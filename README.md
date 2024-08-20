# LMS Frontend

### Setup instruction

1. clone the project

''''
    git clone https://github.com/jalaj-sharma/lms-frontend.git
''''

2. move into the directory

''''
    cd lms-frontend
''''

3. install dependencies

''''
    npm install
''''

4. run the server

''''
    npm run dev
''''



### Setup installation instruction for tailwind

[Tailwind official instruction doc](https://tailwindcss.com/docs/installation)

''''

    1. npm install -D tailwindcss

    2. npx tailwindcss init

    3. add file extensions to tailwind config file in the contents properly
        '''
            "./src/**/*.{html,js,jsx,ts,tsx}"
        '''

    4. add the tailwind directives in 'index.css' file

''''

### Adding plugins and dependencies
    '''
        npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
    '''



### Configure auto import sort eslint

1. INSTALL SIMPLE IMPORT SORT
'''
    npm i -D eslint-plugin-simple-import-sort
'''

2. ADD RULE IN ESLINT.CJS
'''
    'simple-import-sort/imports':'error'
'''
3. ADD SIMPLE IMPORT PLUGINS IN ESLINT
'''
    plugins: ['...','simple-import-sort']
'''
4.TO ENABLE AUTO IMPORT SORT ON FILE SAVE 
    -OPEN `SETTINGS.JSON`
    -ADD THE FOLLOWING CONFIG
'''
    "editor.codeActionOnSave":{
        "source.fixAll.eslintc": true
    }
'''
