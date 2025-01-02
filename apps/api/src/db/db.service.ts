import { Injectable } from '@nestjs/common';
import db from 'better-sqlite3';

@Injectable()
export class DbService {
  private database: db.Database;

  constructor() {
    // Initialize the SQLite database connection
    this.database = new db('./db.sqlite');
    this.database.pragma('journal_mode = WAL');
  }

  onModuleInit() {
    try {
      this.database = new db('./apps/api/src/db/db.sqlite');
      //   console.log('Database initialized successfully.');
      //   this.database
      //     .prepare('CREATE TABLE users (id INTEGER PRIMARY KEY);')
      //     .run();
      this.database.prepare("SELECT * from users WHERE id = '1' ;");
      //
    } catch (error) {
      console.error('Failed to initialize the database:', error);
    }
  }

  // Method to get the database instance (or you can add specific queries)
  getDb(): db.Database {
    return this.database;
  }

  // Optional: You can add convenience methods for common queries
  async query(query: string, params: any[] = []) {
    // const row = await this.database
    //   .prepare('SELECT * FROM users WHERE id = ?')
    //   .get('1');
    // return row;
    return this.database.prepare(query).all(...params);
  }
}
