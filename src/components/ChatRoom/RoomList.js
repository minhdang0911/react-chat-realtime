import React from 'react';
import { Collapse, Typography, Button } from 'antd';
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';
import { AppContext } from '../../Context/AppProvider';

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
    &&& {
        .ant-collapse-header,
        p {
            color: white;
        }

        .ant-collapse-content-box {
            padding: 0 40px;
        }

        .add-room {
            color: white;
            padding: 0;
        }
    }

    @media (max-width: 768px) {
        .ant-collapse-content-box {
            padding: 0 20px;
        }

        .room-name {
            white-space: nowrap;
            margin-left: -20px;
        }

        .add-room {
            margin-left: -39px;
        }

        .text-room {
            font-size: 12px;
        }
    }
`;

const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;
`;

export default function RoomList() {
    const { rooms, setIsAddRoomVisible, setSelectedRoomId } = React.useContext(AppContext);

    const handleAddRoom = () => {
        setIsAddRoomVisible(true);
    };

    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header="Danh sách các phòng" key="1">
                {rooms.map((room) => (
                    <LinkStyled className="room-name" key={room.id} onClick={() => setSelectedRoomId(room.id)}>
                        {room.name}
                    </LinkStyled>
                ))}
                <Button type="text" icon={<PlusSquareOutlined />} className="add-room" onClick={handleAddRoom}>
                    <span className="text-room"> Thêm phòng</span>
                </Button>
            </PanelStyled>
        </Collapse>
    );
}
