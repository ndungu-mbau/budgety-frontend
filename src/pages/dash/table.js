import React from "react"

export default props => (
  <table class="table table-striped">
  <thead class={`bg-${props.type === "incomes" ? "success" : "danger"}`}>
    <tr>
      {props.headers.map(header => (
        <th>{header.label}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {props.data.map(elem => (
      <tr>
        {props.headers.map(header => (
          <td>{elem[header.key]}</td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
)