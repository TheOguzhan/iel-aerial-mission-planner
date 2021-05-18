import * as React from "react";

interface IAppProps {
    //marks: { command: String, p1: String, p2: String, p3: String, p4: String, Lat: String, Long: String, Alt:String }[]
}

const Table: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <table className="table-fixed mx-auto border-separate border border-green-800  my-8">
            <thead>
                <tr>
                    <th className=" border-green-600 bg-green-600 p-2">#</th>
                    <th className=" border-green-600 bg-green-600 p-2">Command</th>
                    <th className=" border-green-600 bg-green-600 p-2">p1</th>
                    <th className=" border-green-600 bg-green-600 p-2">p2</th>
                    <th className=" border-green-600 bg-green-600 p-2">p3</th>
                    <th className=" border-green-600 bg-green-600 p-2">p4</th>
                    <th className=" border-green-600 bg-green-600 p-2">Lat</th>
                    <th className=" border-green-600 bg-green-600 p-2">Long</th>
                    <th className=" border-green-600 bg-green-600 p-2">Alt</th>
                    <th className=" border-green-600 bg-green-600 p-2">Frame</th>
                    <th className=" border-green-600 bg-green-600 p-2">Delete</th>
                    <th className=" border-green-600 bg-green-600 p-2">Up</th>
                    <th className=" border-green-600 bg-green-600 p-2">Down</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className=" border-green-600 bg-green-500 p-2">1</td>
                    <td className=" border-green-600 bg-green-500 p-2">Command</td>
                    <td className=" border-green-600 bg-green-500 p-2">p1</td>
                    <td className=" border-green-600 bg-green-500 p-2">p2</td>
                    <td className=" border-green-600 bg-green-500 p-2">p3</td>
                    <td className=" border-green-600 bg-green-500 p-2">p4</td>
                    <td className=" border-green-600 bg-green-500 p-2">Lat</td>
                    <td className=" border-green-600 bg-green-500 p-2">Long</td>
                    <td className=" border-green-600 bg-green-500 p-2">Alt</td>
                    <td className=" border-green-600 bg-green-500 p-2">Frame</td>
                    <td className=" border-green-600 bg-green-500 p-2">Delete</td>
                    <td className=" border-green-600 bg-green-500 p-2">Up</td>
                    <td className=" border-green-600 bg-green-500 p-2">Down</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
