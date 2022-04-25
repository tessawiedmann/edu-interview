import styles from '@/pages/index.module.css'
import { DetailsList, DetailsListLayoutMode, IColumn, SelectionMode } from '@fluentui/react'
import { assignmentData } from 'data/list';

export default function Home() {
  const columns: IColumn[] = [
    { key: 'student', name: 'Student', fieldName: 'student', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'assignment', name: 'Assignment', fieldName: 'assignment', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'dueDate', name: 'Due Date', fieldName: 'dueDate', minWidth: 100, maxWidth: 400, isResizable: true },
  ];

  return (
    <div className={styles.container}>
      <DetailsList
          items={assignmentData.map(item => ({...item, dueDate: item.dueDate.toDateString()}))}
          columns={columns}
          className={styles.table}
          layoutMode={DetailsListLayoutMode.justified}
          selectionMode={SelectionMode.none}
        />
    </div>
  )
}
