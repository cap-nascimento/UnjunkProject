import { Pessoa } from "../models/pessoa.model";
import { DatabaseConnection } from "../database/database-connection";

const table = "pessoa";
const db = DatabaseConnection.getConnection();

export default class PessoaService {

  static addData(param: Pessoa) {
    return new Promise((resolve, reject) => db.transaction(
      tx => {
        tx.executeSql(
          `insert into ${table} (peso, altura)
           values(?, ?)`,
           [param.peso, param.altura],
           (_, { insertId, rows }) => {
            console.log("id insert: " + insertId);
          }), (sqlError:any) => {
            console.log(sqlError);
          }}, (txError:any) => {
            console.log(txError);
          }));
  }

  static deleteBy(id: number) {
    db.transaction(
      tx => {
        tx.executeSql(
        `delete from ${table} where id = ?;`, 
        [id], 
        (_, { rows }) => {
          //  
        }), (sqlError:any) => {
          console.log(sqlError);
        }}, (txError) => {
          console.log(txError);
        });
  }

  static updateById(param: Pessoa) {
    return new Promise((resolve, reject) => db.transaction(
      tx => {
        tx.executeSql(
        `update ${table} set peso = ?, altura = ? where id = ?;`,
        [param.peso, param.altura, param.id],
        () => {
          //
        }), (sqlError:any) => {
          console.log(sqlError);
        }}, (txError) => {
          console.log(txError);
      }));
  }

  static findById(id: number) {
    return new Promise((resolve, reject) => db.transaction(
      tx => {
        tx.executeSql(
          `select * from ${table} where id = ?`,
          [id],
          (_, { rows }) => {
            resolve(rows);
          }), (sqlError:any) => {

          }}, (txError) => {
            console.log(txError);
        }));
  }

  static findAll() {
    return new Promise((resolve, reject) => db.transaction(
      tx => {
        tx.executeSql(
          `select * from ${table}`,
          [],
          (_, { rows }) => {
            resolve(rows);
          }), (sqlError:any) => {
            console.log(sqlError);
          }}, (txError) => {
            console.log(txError);
      }));
  }

}