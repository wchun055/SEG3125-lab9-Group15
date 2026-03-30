# SEG3125 Group 15 Lab 9

*Designing a website of our choice. (Part 2)*

**New Additions:**

- Connected to Supabase database.

- Styling overhaul.

- Two languages available for entire site. (English and French toggle.)

**Group 15:**

- Winona Chung (300298148)

- John Vitor Lopes (300319245)

- Rachel Olugbemiro (300302892)

## Setup / Instructions:

### Setting up dependencies:
1. If you don't have it already, install [npm](https://www.npmjs.com/).
2. Clone repository.
3. In the terminal, type:

   ```npm install```

#### Libraries:

When installing dependencies, the following will also be added:

1. [daisyUI 5](https://www.npmjs.com/package/daisyui):

   ```npm i -D daisyui@latest```

2. [Supabase](https://supabase.com/):

   ```npm install @supabase/supabase-js```

3. [uuid](https://www.npmjs.com/package/uuid):

   ```npm install uuid```

### Setting up Supabase:

1. You will require your own .env.local file with:

   ```NEXT_PUBLIC_SUPABASE_URL= URL HERE```

   ```NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY= YOUR PERSONAL KEY HERE```

   Please reach out for more information for setup!

### Starting server:
1. In your clone repository (with npm installed), type:
   
   ```npm run dev```
       
2. You will see a success message in your console logs.
3. Through your browser, you can now access the site landing page through: http://localhost:3000
