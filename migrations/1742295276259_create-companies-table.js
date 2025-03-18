exports.up = (pgm) => {
  pgm.sql(`
        CREATE TABLE IF NOT EXISTS companies (
            id serial primary key,
            name varchar(255) NOT NULL,
            address TEXT,
            email varchar(255) NOT NULL,
            password TEXT,
            contact_phone varchar(50),
            logo_url TEXT,
            company_website VARCHAR(50),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            status VARCHAR(50) DEFAULT 'active'
        );
    `);
};

exports.down = (pgm) => {
  pgm.sql(`
        DROP TABLE companies;    
    `);
};
