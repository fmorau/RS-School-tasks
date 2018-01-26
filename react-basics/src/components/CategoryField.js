import React from 'react';
import MaterialIcon from 'material-icons-react';
import AdjustCategory from './AdjustCategory';
import styled from 'styled-components';
import FieldLabel from './FieldLabel';
import { addSubCategory, deleteCategory } from '../actions';
import { connect } from 'react-redux';

const FieldWrapper = styled.li`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    border: 1px solid LightBlue;
    border-radius: 0.2rem;

    width: ${props => `${props.category * 100}%`};
    min-width: 80%;

    > i {
        flex: 1;
        margin: 0 2%;
    }
`;


const CategoryField = (props) => {
    return (
        <FieldWrapper category={props.category}>
            <FieldLabel
                path={`/${props.value}`}
                category={props.category}
                value={props.value}
                checked={props.checked}
                onClick={() => props.checked ? console.log('not today, bro') : props.pick(props.pathToNode, props.value)}
            />
            <MaterialIcon icon="mode_edit" size="tiny" />
            <AdjustCategory
                selected={props.selected}
                value={props.value}
                onDelete={() => props.deleteCategoryField(props.pathToNode)}
                onAdd={() => props.addSubcategoryField(props.pathToNode)}
            />
        </FieldWrapper>
    );
}

const mapStateToProps = (state) => {
    return {
        selected: state.todos.get('selectedCategory'),
    }
}

const mapActionToProps = (dispatch) => {
    return {
        addSubcategoryField(value) {
            dispatch(addSubCategory(value))
        },
        deleteCategoryField(value) {
            dispatch(deleteCategory(value))
        }
    }
}

export default connect(mapStateToProps, mapActionToProps)(CategoryField);
