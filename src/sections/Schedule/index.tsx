import React from 'react';
import { useState } from 'react';

import { Container, Days, Day, DescriptionDays, TableDay } from './styles';

import TitleSection from '../../components/TitleSection';
import TableDaySingle from '../../components/TableDaySingle';


import {loadSingles} from './LoadSingles'
const Single = loadSingles()

const Schedule: React.FC = () => {
  const [classDay, setClassDay] = useState(['','',''])

  return <Container>
    <TitleSection title="EVENT SCHEDULE" description="Here is our event schedule"/>
    <Days>
      <Day className={classDay[0]} onClick={()=>setClassDay(['is','',''])}>Day 1</Day>

      <Day className={classDay[1]} onClick={()=>setClassDay(['','is',''])}>Day 2</Day>

      <Day className={classDay[2]} onClick={()=>setClassDay(['','','is'])}>Day 3</Day>
    </Days>
    <DescriptionDays>Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius necessitatibus voluptatem quis labore perspiciatis quia.</DescriptionDays>

    <TableDay>
      {Single.map(data => <TableDaySingle time={data.time} title={data.title} description={data.description} imgSrc={data.imgSrc}/>)}
    </TableDay>
  </Container>;
}

export default Schedule;