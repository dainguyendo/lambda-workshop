import React, { Component } from 'react';
import _ from 'lodash';

export default class Result extends Component {
    render() {
        const { geojson } = this.props;
        const empty = _.isEmpty(geojson);
        return (
            <div>
                { empty ? (null) : (
                    <code>
                        {JSON.stringify(geojson)}
                    </code>
                )}
            </div>
        );
    }
}