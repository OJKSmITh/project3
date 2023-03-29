import styled from 'styled-components'

export const  WriteBox = styled.div`
    & > div:nth-child(1) {
        display: flex;
        align-items: center;
        padding-left: 15px;
    }
    padding: 15px 0 0 0;
    margin: 25px auto;
    width: 1750px;
    height: 875px;
    background: #D9D9D9;
    position: relative;
`
export const WriteSubmit = styled.form`
    
`

export const SubBtn = styled.button`
    position: absolute;
    right: 70px;
    margin-top: 25px;
    display: inline-block;
    text-align: center;
    align-items: center;
    width: 100px;
    height: 50px;
    border: 1px solid #D9D9D9;
    border-radius: 12px;
    line-height: 36px;
    font-size: 14px;
    cursor: pointer;
`

export const SubjectBox = () => {
    const Subject = styled.div`
        font-size: 30px;
        margin: 15px 70px;
        background: #A6B8C4;
        height: 65px;
        display: flex;
        align-items: center;
    `

    const SubContent = styled.span`
        font-size: 30px;
        line-height: 36px;
        font-weight: 400;
        margin-left: 15px;
    `

    const SubInput = styled.input`
        font-size: 30px;
        background: #A6B8C4;
        border:none;
        width: 1300px;

        &:focus {
            outline: none;
        }

    `

    return (
        <Subject>
            <SubContent>제목: <SubInput placeholder='제목을 입력해주세요.'/></SubContent>
        </Subject>
    )

}


export const ContentBox = () => {

    const WriteArea = styled.div`
        margin: auto;
        background: #A6B8C4;
        width: 1610px;
        height: 680px;
        padding: 15px;
        box-sizing: border-box;
    `

    const TextContent = styled.input`
        width: 100%;
        font-size: 20px;
        line-height: 36px;
        font-weight: 400;
        border: none;
        background: #A6B8C4;

        &:focus {
            outline: none;
        }
    `

    return <>
        <label>
            <WriteArea>
                <TextContent type="text" name="input" placeholder='내용을 입력해주세요.'></TextContent>
            </WriteArea>
        </label>
        
    </>
}


export const Upload = () => {

    const UploadFrm = styled.form`
    `

    const Input = styled.input`
        opacity: 0;
        width: 10px;
    `

    const ChoiceBtn = styled.label`
        display: inline-block;
        text-align: center;
        align-items: center;
        width: 250px;
        height: 50px;
        border: 1px solid #FFF;
        border-radius: 12px;
        line-height: 36px;
        font-size: 14px;
        cursor: pointer;
    `
    

    const UploadBox = styled.div`
        display: flex;
        flex-direction: row;
        margin-left: 60px;
        padding-top: 25px;
        box-sizing: border-box;
    `

    return<>
        <UploadBox> 
            <UploadFrm>
                <Input type="file" name="musicfilename"></Input>
                <ChoiceBtn for="musicfilename">업로드</ChoiceBtn>
                <button type='submit' style={{display: "none"}}></button>

                <Input type="file" name="imagefilename"></Input>
                <ChoiceBtn for="imagefilename">업로드</ChoiceBtn>
                <button type='submit' style={{display: "none"}}></button>
            </UploadFrm>
        </UploadBox>        
    </>
}
