import Classroom from '@/components/Classroom'

export default {
  path: '/classroom/:classId',
  name: 'classroom.show',
  component: Classroom,
  // children: [
  //   {
  //     path: ':classId',
  //     name: 'classroom.show',
  //     component: Classroom,
  //     props: true
  //   }
  // ]
  props: true
}
