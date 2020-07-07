import React from 'react';
import { Row, Col, Input } from 'antd';

function SearchContainer() {
    const handleChange = e => {
        console.log({[e.target.id]: e.target.value});
    }

    return (
        <Row>
            <Col span={24}>
                <Input id='title' onChange={handleChange} />
            </Col>
        </Row> 
    )
}

export default SearchContainer; 