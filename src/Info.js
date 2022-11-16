export const TableInfo = (props) => {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
        {props.information.map((info) => {
          return (
            <tr>
              <td>{info.name}</td>
              <td>{info.age}</td>
              <td>
                <button onClick={() => props.deleteInfo(info.id)}>del</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export const FormInfo = (props) => {
  return (
    <div>
      <label htmlFor="">Name:</label>
      <input
        type="text"
        onChange={(event) => props.setNewName(event.target.value)}
      />
      <label htmlFor="">Age:</label>
      <input
        type="number"
        onChange={(event) => props.setNewAge(event.target.value)}
      />
      <button onClick={props.addInformation}> Add Info</button>
    </div>
  );
};
