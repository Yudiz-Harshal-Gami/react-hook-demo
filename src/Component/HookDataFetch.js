import React, { useState, useEffect } from 'react'

function HookDataFetch() {
    let [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://6474343e7de100807b1a78dd.mockapi.io/user')
            .then(response => response.json())
            .then(data => setData(data));
    }, [])

    return (
        <div className="container">
            <div className='row'>
                {
                    data.map(person => (
                        <div className="col-md-3 card">
                            <img src={person.image} loading='lazy' className="card-img-top" alt={person.name} />
                            <div className="card-body">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Name :</th>
                                            <td>&nbsp;{person.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Email :</th>
                                            <td>&nbsp;{person.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Birthdate :</th>
                                            <td>&nbsp;{person.birthdate}</td>
                                        </tr>
                                        <tr>
                                            <th>Gender :</th>
                                            <td>&nbsp;{person.gender}</td>
                                        </tr>
                                        <tr>
                                            <th>Contact :</th>
                                            <td>&nbsp;{person.contact}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HookDataFetch