import { DatabaseConnection } from './database-connection'

var db:any = null
export default class DatabaseInit {

    constructor() {
        db = DatabaseConnection.getConnection();
        this.InitDb();
    }
    private InitDb() {
      var sql = [
        `DROP TABLE IF EXISTS pessoa;`,

        `create table if not exists pessoa (
          id integer primary key autoincrement,
          peso real not null,
          altura real not null);`,
      ];

      db.transaction(
        (tx: { executeSql: (arg0: string) => void; }) => {
          for (var i = 0; i < sql.length; i++) {
            console.log("execute sql : " + sql[i]);
            tx.executeSql(sql[i]);
          }
        }, (error: any) => {
          console.log("error call back : " + JSON.stringify(error));
          console.log(error);
        }, () => {
          console.log("transaction complete call back ");
        }
      );
    }

}