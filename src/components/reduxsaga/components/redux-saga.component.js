import React, {Component} from 'react';
import TaskListComponent from './task-list/task-list.component';
class ReduxSagaComponent extends Component{
    render() {
        return(
            <>
                <TaskListComponent></TaskListComponent>
            </>
        );
    }
}

export default ReduxSagaComponent;