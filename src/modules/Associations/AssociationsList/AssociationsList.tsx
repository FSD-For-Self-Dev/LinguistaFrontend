/* eslint-disable prettier/prettier */
import CardAssociation from '../CardAssociation';
import styles from './AssociationsList.module.scss';
import { dataAssociation } from '../mocks';


const AssociationsList = () => {

    return (
        <div className={styles.list}>
            {dataAssociation.map((associationsItem, index) => (
                <CardAssociation key={index} item={associationsItem} />
            ))}

        </div>

    )
}

export default AssociationsList;
