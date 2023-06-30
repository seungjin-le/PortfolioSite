import SkillTag from 'components/tags/SkillTag'
import DescriptionMarkDown from 'components/texts/DescriptionMarkDown'
import {ProjectDescriptionSectionProps} from 'lodash'
import {labelsAndColors} from 'utility/listItems'

const ProjectSections = ({item}: ProjectDescriptionSectionProps) => {
  return (
    <div className={'w-full rounded-tags'}>
      <div className={'w-full  flex flex-row '}>
        <img className={'max-h-[60px] rounded-default mr-6'} src={item?.logo} alt='' />
        <div className={'w-full flex items-center justify-start text-titleText text-3xl'}>{item?.company}</div>
      </div>
      <div>
        <div
          className={
            'w-full flex flex-col text-text overflow-scroll overflow-x-hidden scrollbar-hide  rounded-default '
          }
        >
          <div className='flex flex-row justify-between w-full h-auto py-4 md:flex-col'>
            <div className={'w-[40%] md:w-full md:border-solid md:border-b md:border-text mb-6'}>
              <div className={'my-2 flex flex-row md:flex-col'}>
                <div className='flex-1 px-2 py-3 '>
                  <dt className='text-2xl text-subTitleText'>{item.projectName}</dt>
                  <dd className='mt-2 ml-2 text-base '>
                    기간 : {item.date.start} ∼ {item.date.end}
                  </dd>
                </div>
              </div>
              <div className={'my-2 flex flex-col h-auto'}>
                <div className='flex flex-col flex-1 px-2 py-3 '>
                  <dt className='text-2xl '>Project Type</dt>
                  <dd className='mt-2 ml-2 text-base '>{item.projectType}</dd>
                </div>
                <div className='flex flex-col flex-1 px-2 py-3 '>
                  <dt className='text-2xl '>Team Member</dt>
                  <dd className='flex flex-row mt-2 ml-2 text-md'>
                    <span className={'mr-4'}>Front : {item.team.front}</span>
                    <span>Back : {item.team.back}</span>
                  </dd>
                </div>
              </div>
              <div>
                <div className='px-2 py-3 my-6'>
                  <dt className='text-2xl '>Skills</dt>
                  <dd className='flex flex-wrap mt-2 ml-2 text-base '>
                    {labelsAndColors?.map((v, i) => {
                      if (item.skills.indexOf(v.label)) return <SkillTag name={v.label} color={v.color} key={i} />
                    })}
                  </dd>
                </div>
              </div>
            </div>
            <div className='w-[60%] md:w-full'>
              <dd className='mt-2 ml-2 text-base '>
                <DescriptionMarkDown description={item.description} />
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSections
